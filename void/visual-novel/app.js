(function(){
  'use strict';

  let volKey = 1;
  let current = 0;
  let entries = [];
  let TOTAL = 0;
  let audioOn = false;
  let isTransitioning = false;
  let isMenuOpen = false;
  let isOrbSelecting = false;
  let hasStarted = false;

  /* ── Timing constants ────────────────────────────────────────────
     Several of these are paired with a CSS transition duration (see the
     matching NOTE comments in style.css) — change both sides together. */
  const ORB_EXPAND_MS = 900;          // matches .orb width/height transition
  const ORB_MENU_FADE_MS = 600;       // inline orbMenu fade-out duration
  const ORB_CLEANUP_BUFFER_MS = 130;  // slack after the fade before final cleanup
  const SCROLL_COOLDOWN_MS = 400;
  const PANEL_CLOSE_ADVANCE_DELAY = 230; // matches .entry-full transform transition
  const OVERLAY_HIDE_MS = 250;        // matches .overlay.hide animation
  const GOENTRY_SWAP_DELAY = 320;
  const ADVANCE_SWAP_DELAY = 560;
  const STAGGER_BASE = 130;
  const STAGGER_STEP = 280;
  const STAGGER_IMMEDIATE_STEP = 70;
  const ILLUS_IMMEDIATE_DELAY = 320;
  const ILLUS_STAGGER_BUFFER = 200;
  const ILLUS_REVEAL_DELAY = 1000;
  const PROMPT_IMMEDIATE_DELAY = 650;
  const PROMPT_BUFFER = 320;
  const FULLPARA_STAGGER_BASE = 120;  // matches .full-para transition
  const FULLPARA_STAGGER_STEP = 100;

  const stageEl = document.getElementById('stage');
  const promptEl = document.getElementById('prompt');
  const counterEl = document.getElementById('counter');
  const volTagEl = document.getElementById('vol-tag');
  const orbMenu = document.getElementById('orb-menu');
  const topbar = document.getElementById('topbar');

  /* ── Orb Parallax Physics ──────────────────────────────────────── */
  let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
  let targetMouseX = mouseX, targetMouseY = mouseY;
  let physicsId;
  let physicsTime = 0;

  document.addEventListener('mousemove', e => { targetMouseX = e.clientX; targetMouseY = e.clientY; });
  document.addEventListener('touchmove', e => { targetMouseX = e.touches[0].clientX; targetMouseY = e.touches[0].clientY; });

  function runPhysics() {
    if (!isMenuOpen || isOrbSelecting) return;
    physicsTime += 0.016;
    
    // Smooth trailing lerp for "heavy" feel
    mouseX += (targetMouseX - mouseX) * 0.04;
    mouseY += (targetMouseY - mouseY) * 0.04;

    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const orbs = document.querySelectorAll('.orb-wrapper');
    
    orbs.forEach((ow, i) => {
      // If expanding to center, skip physics for that orb
      if (ow.classList.contains('selected')) return;

      const depth = 1 + (i * 0.6); // Further orbs move more
      const dx = (mouseX - cx) * -0.04 * depth;
      const dy = (mouseY - cy) * -0.04 * depth;
      const floatY = Math.sin(physicsTime * 1.5 + i * 2) * 12;
      const floatX = Math.cos(physicsTime * 1.2 + i * 2) * 8;
      
      ow.style.setProperty('--px', `${dx + floatX}px`);
      ow.style.setProperty('--py', `${dy + floatY}px`);
    });

    physicsId = requestAnimationFrame(runPhysics);
  }

  /* ── Volumes 3D Menu Handlers ──────────────────────────────────── */
  window.openVolumes = function() {
    if (audioOn) AudioEngine.silence(); // Explicitly silence on open
    isMenuOpen = true;
    document.body.classList.add('in-menu');
    orbMenu.classList.add('active');
    // "Resume" only makes sense once a volume has actually been entered —
    // on first boot there's nothing loaded yet, so keep it hidden and inert.
    const nav = document.querySelector('.orb-menu-nav');
    nav.style.opacity = hasStarted ? '1' : '0';
    nav.style.pointerEvents = hasStarted ? '' : 'none';

    // Reset orbs from any previous selections
    document.querySelectorAll('.orb-wrapper').forEach(ow => {
      ow.classList.remove('selected', 'fade-out');
      ow.querySelector('.orb-label').style.opacity = 1;
    });

    runPhysics();
  };

  window.closeVolumes = function() {
    if (!hasStarted) return; // nothing loaded to resume to yet
    isMenuOpen = false;
    cancelAnimationFrame(physicsId);
    document.body.classList.remove('in-menu');
    orbMenu.classList.remove('active');
    // Restore audio only if we were already playing (not on first boot)
    if (audioOn && entries && entries[current] && entries[current].audio) {
      AudioEngine.apply(entries[current].audio);
    }
  };

  window.selectVolume = function(key) {
    if (!isMenuOpen || isOrbSelecting) return;
    isOrbSelecting = true;
    hasStarted = true;
    
    const selectedWrapper = document.querySelector(`.ow-${key}`);
    const nav = document.querySelector('.orb-menu-nav');
    nav.style.opacity = '0';
    nav.style.pointerEvents = 'none';

    // Fade out unselected elements
    document.querySelectorAll('.orb-wrapper').forEach(ow => {
      ow.querySelector('.orb-label').style.opacity = 0;
      if (ow !== selectedWrapper) ow.classList.add('fade-out');
    });

    // Expand the selected orb infinitely using CSS width/height native expansion
    selectedWrapper.classList.add('selected');

    // Wait for the orb to fully swallow the viewport
    setTimeout(() => {
      // First interaction — start audio now (orb click counts as user gesture)
      if (!audioOn) {
        audioOn = true;
        AudioEngine.init();
      }
      loadVolume(key, 0);

      // Smoothly fade out the expanded menu to reveal the exact same color underneath it
      orbMenu.style.transition = `opacity ${ORB_MENU_FADE_MS}ms var(--ease-out)`;
      orbMenu.classList.remove('active');
      document.body.classList.remove('in-menu');

      // Cleanup logic behind the scenes after the fade is complete
      setTimeout(() => {
        selectedWrapper.classList.remove('selected');
        orbMenu.style.transition = '';
        isOrbSelecting = false;
        isMenuOpen = false;
        cancelAnimationFrame(physicsId);
      }, ORB_MENU_FADE_MS + ORB_CLEANUP_BUFFER_MS);

    }, ORB_EXPAND_MS);
  };

  /* ── Initialization & Content Logic ────────────────────────────── */
  function loadVolume(key, startIdx = 0) {
    isTransitioning = false;
    volKey = key;
    entries = VOL[volKey];
    TOTAL = entries.length;
    current = startIdx;

    document.body.className = VOL_INFO[volKey].theme;
    if(window.__gol) window.__gol.updateColor();

    stageEl.innerHTML = '';
    entries.forEach((entry, i) => {
      const div = document.createElement('div');
      div.className = 'entry';
      div.id = 'e' + i;
      const lbl = document.createElement('p');
      lbl.className = 'lbl block';
      lbl.textContent = entry.label;
      div.appendChild(lbl);
      
      entry.blocks.forEach(b => {
        const p = document.createElement('p');
        p.className = `${b.cls} block`;
        p.textContent = b.t;
        div.appendChild(p);
      });
      if (entry.illus) div.insertAdjacentHTML('beforeend', illustHTML[entry.illus]);

      // --- Full Entry Panel ---
      if (entry.full && entry.full.length) {
        const fullPanel = document.createElement('div');
        fullPanel.className = 'entry-full';
        fullPanel.innerHTML = `<button class="full-collapse" onclick="collapseFullPanel(event)">↑ close</button>
          <p class="full-label">${entry.label}</p>`;
        entry.full.forEach(para => {
          const p = document.createElement('p');
          p.className = 'full-para' + (para.cls ? ' ' + para.cls : '');
          p.textContent = para.t;
          fullPanel.appendChild(p);
        });
        // fullPanel.insertAdjacentHTML('beforeend', '<p class="full-scroll-hint">scroll · click to continue</p>');
        div.appendChild(fullPanel);
      }

      stageEl.appendChild(div);
    });

    document.getElementById('curtain').classList.remove('up');
    enterEntry(current, true);
  }

  /* ── Full Panel: Collapse ────────────────────────────────────────── */
  window.collapseFullPanel = function(e) {
    e.stopPropagation();
    const activeEntry = document.getElementById('e' + current);
    if (!activeEntry) return;
    const fullPanel = activeEntry.querySelector('.entry-full');
    if (fullPanel) {
      fullPanel.classList.remove('revealed');
      activeEntry.classList.remove('excerpt-dimmed');
      document.body.classList.remove('in-full-view');
      if (audioOn) AudioEngine.unduck();
      // Re-fade in excerpt blocks
      activeEntry.querySelectorAll('.block, .illus').forEach(el => {
        el.style.opacity = '';
        el.style.transform = '';
      });
    }
  };

  /* ── Full Panel: Reveal / Dismiss on scroll & touch ─────────────── */
  let fullViewOpen = false;
  let scrollCooldown = false;
  let touchStartY = 0;
  let wheelAccum = 0;
  let edgeAccum = 0;
  function resetScrollAccum() { wheelAccum = 0; edgeAccum = 0; }

  function openFullPanel() {
    const activeEntry = document.getElementById('e' + current);
    if (!activeEntry) return;
    const fullPanel = activeEntry.querySelector('.entry-full');
    if (!fullPanel || fullPanel.classList.contains('revealed')) return;

    resetScrollAccum();
    fullPanel.classList.add('revealed');
    activeEntry.classList.add('excerpt-dimmed');
    document.body.classList.add('in-full-view');
    fullViewOpen = true;
    if (audioOn) AudioEngine.duck();

    // Stagger the full-para elements in
    const paras = fullPanel.querySelectorAll('.full-para');
    paras.forEach((p, i) => {
      setTimeout(() => p.classList.add('in'), FULLPARA_STAGGER_BASE + i * FULLPARA_STAGGER_STEP);
    });
  }

  function closeFullPanel() {
    const activeEntry = document.getElementById('e' + current);
    if (!activeEntry) return;
    const fullPanel = activeEntry.querySelector('.entry-full');
    if (!fullPanel) return;
    resetScrollAccum();
    fullPanel.classList.remove('revealed');
    activeEntry.classList.remove('excerpt-dimmed');
    document.body.classList.remove('in-full-view');
    fullViewOpen = false;
    if (audioOn) AudioEngine.unduck();
    activeEntry.querySelectorAll('.block, .illus').forEach(el => {
      el.style.opacity = '';
      el.style.transform = '';
    });
  }

  function handleScrollIntent(direction) {
    if (scrollCooldown || isTransitioning || isMenuOpen || isOrbSelecting) return;

    scrollCooldown = true;
    setTimeout(() => { scrollCooldown = false; }, SCROLL_COOLDOWN_MS);

    const entry = entries[current];
    const hasFullContent = entry && entry.full && entry.full.length;

    if (direction === 'down') {
      if (hasFullContent && !fullViewOpen) {
        openFullPanel();
      } else {
        if (fullViewOpen) { closeFullPanel(); setTimeout(() => advance(), PANEL_CLOSE_ADVANCE_DELAY); }
        else advance();
      }
    } else if (direction === 'up') {
      if (fullViewOpen) closeFullPanel();
    } else if (direction === 'advance') {
      // From bottom of full panel
      closeFullPanel();
      setTimeout(() => advance(), PANEL_CLOSE_ADVANCE_DELAY);
    }
  }

  // Wheel
  const EDGE_THRESHOLD = 80; // sustained scroll-past-edge required before leaving the panel,
                              // so a single momentum/rubber-band overscroll tick doesn't fire it
  document.addEventListener('wheel', e => {
    if (isMenuOpen || isOrbSelecting) return;
    if (e.target.closest('.overlay') || e.target.closest('#orb-menu')) return;
    // If full panel is open and scrollable, let it scroll naturally
    const activeEntry = document.getElementById('e' + current);
    if (activeEntry) {
      const fullPanel = activeEntry.querySelector('.entry-full.revealed');
      if (fullPanel) {
        const atBottom = fullPanel.scrollTop + fullPanel.clientHeight >= fullPanel.scrollHeight - 4;
        const atTop = fullPanel.scrollTop <= 0;
        if (e.deltaY > 0 && !atBottom) { edgeAccum = 0; return; } // let panel scroll
        if (e.deltaY < 0 && !atTop) { edgeAccum = 0; return; }

        // At an edge — require the overscroll to persist past a threshold rather than
        // acting on the first tick, so a brief rubber-band bounce doesn't close the panel.
        e.preventDefault();
        edgeAccum += e.deltaY;
        if (e.deltaY < 0 && atTop && edgeAccum < -EDGE_THRESHOLD) {
          edgeAccum = 0; wheelAccum = 0; handleScrollIntent('up'); return;
        }
        if (e.deltaY > 0 && atBottom && edgeAccum > EDGE_THRESHOLD) {
          edgeAccum = 0; wheelAccum = 0; handleScrollIntent('advance'); return;
        }
        return;
      }
    }
    edgeAccum = 0;
    wheelAccum += e.deltaY;
    if (Math.abs(wheelAccum) > 60) {
      handleScrollIntent(wheelAccum > 0 ? 'down' : 'up');
      wheelAccum = 0;
    }
  }, { passive: false });

  // Touch swipe
  document.addEventListener('touchstart', e => {
    if (isMenuOpen || isOrbSelecting) return;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  document.addEventListener('touchend', e => {
    if (isMenuOpen || isOrbSelecting) return;
    if (e.target.closest('.overlay') || e.target.closest('#orb-menu')) return;
    const dy = touchStartY - e.changedTouches[0].clientY;
    if (Math.abs(dy) < 40) return; // too small — treat as tap
    handleScrollIntent(dy > 0 ? 'down' : 'up');
  }, { passive: true });



  window.openSelector = function() {
    const ov = document.getElementById('sel-overlay');
    ov.classList.add('show');
    document.getElementById('sel-title').textContent = VOL_INFO[volKey].name;
    document.getElementById('sel-sub').textContent = VOL_INFO[volKey].sub;
    const list = document.getElementById('sel-list');
    list.innerHTML = '';
    entries.forEach((e, i) => {
      const b = document.createElement('div');
      b.className = 'sel-entry' + (i === current ? ' current' : '');
      const parts = e.label.split('—');
      b.innerHTML = `<span class="sel-e-num">${parts[0].trim()}</span><span class="sel-e-name">${parts.slice(1).join('—').trim()}</span><span class="sel-e-dot"></span>`;
      b.onclick = () => { closeOverlay('sel-overlay'); goEntry(i); };
      list.appendChild(b);
    });
  };

  window.closeOverlay = function(id) {
    const ov = document.getElementById(id);
    ov.classList.add('hide');
    setTimeout(() => { ov.classList.remove('hide', 'show'); }, OVERLAY_HIDE_MS);
  };

  function goEntry(idx) {
    if (idx === current || isTransitioning) return;
    isTransitioning = true;
    document.querySelectorAll('.block, .illus').forEach(el => el.classList.remove('in'));
    const currEl = document.getElementById('e' + current);
    if(currEl) currEl.classList.remove('active');
    setTimeout(() => { enterEntry(idx); isTransitioning = false; }, GOENTRY_SWAP_DELAY);
  }

  /* ── Audio Engine (Web Audio API) ─────────────────────────────── */
  const AudioEngine = (function() {
    let ctx = null, master = null, duckGain = null, init = false;
    let droneOsc = [], droneGain = [], noiseNode = null;
    let breathLFO = null, vibratoLFO = null, vibratoGain = null;
    let baseMasterLevel = 0.18;

    function initialize() {
      if (init) return;
      try {
        ctx = new (window.AudioContext || window.webkitAudioContext)();

        // Signal chain: oscillators -> droneGain -> duckGain -> master -> destination
        master   = ctx.createGain(); master.gain.value   = 0;   master.connect(ctx.destination);
        duckGain = ctx.createGain(); duckGain.gain.value = 1.0; duckGain.connect(master);

        // Breath LFO: slow volume swell (~14s cycle, ±18% of duckGain)
        // Modulates duckGain so the swell is relative to current level
        breathLFO = ctx.createOscillator();
        breathLFO.type = 'sine';
        breathLFO.frequency.value = 0.072; // ~14s cycle
        const breathDepth = ctx.createGain();
        breathDepth.gain.value = 0.18; // ±18% — clearly audible
        breathLFO.connect(breathDepth);
        breathDepth.connect(duckGain.gain); // modulate duck layer, not master
        breathLFO.start();

        // Vibrato LFO: very slow pitch drift (~8s cycle)
        vibratoLFO  = ctx.createOscillator();
        vibratoLFO.type = 'sine';
        vibratoLFO.frequency.value = 0.12;
        vibratoGain = ctx.createGain();
        vibratoGain.gain.value = 0;
        vibratoLFO.connect(vibratoGain);
        vibratoLFO.start();

        // Three drone oscillators
        const ratios  = [1, 1.498, 2.0];
        const detunes = [1, 1.003, 0.997];
        for (let i = 0; i < 3; i++) {
          let osc = ctx.createOscillator(), g = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.value = 80 * ratios[i] * detunes[i];
          g.gain.value = 0;
          vibratoGain.connect(osc.frequency);
          osc.connect(g); g.connect(duckGain);
          osc.start();
          droneOsc.push(osc); droneGain.push(g);
        }
        droneGain[0].gain.value = 1; droneGain[1].gain.value = 0.6; droneGain[2].gain.value = 0.4;

        // Noise layer
        let buf = ctx.createBuffer(1, ctx.sampleRate * 4, ctx.sampleRate);
        let d = buf.getChannelData(0);
        for (let j = 0; j < d.length; j++) d[j] = (Math.random() * 2 - 1) * 0.3;
        noiseNode = ctx.createBufferSource(); noiseNode.buffer = buf; noiseNode.loop = true;
        let nf = ctx.createBiquadFilter(); nf.type = 'lowpass'; nf.frequency.value = 400; nf.Q.value = 0.5;
        let ng = ctx.createGain(); ng.gain.value = 0;
        noiseNode.connect(nf); nf.connect(ng); ng.connect(duckGain); noiseNode.start();
        noiseNode._gain = ng; noiseNode._filter = nf;

        master.gain.setTargetAtTime(baseMasterLevel, ctx.currentTime, 1.0);
        init = true;
      } catch(e) { console.warn("Web Audio API not supported"); }
    }

    function applyState(cfg) {
      if (!init || !ctx) return;
      if (ctx.state === 'suspended') ctx.resume();

      const now = ctx.currentTime + 0.1, timeConst = 1.5;
      const pitchMult = cfg.pitch * 3.0;
      droneOsc[0].frequency.setTargetAtTime(pitchMult,         now, timeConst);
      droneOsc[1].frequency.setTargetAtTime(pitchMult * 1.498, now, timeConst);
      droneOsc[2].frequency.setTargetAtTime(pitchMult * 2.0,   now, timeConst);
      vibratoGain.gain.setTargetAtTime(pitchMult * 0.004, now, timeConst);

      const dv = 0.4 + cfg.tension * 0.5;
      droneGain[0].gain.setTargetAtTime(dv,        now, timeConst);
      droneGain[1].gain.setTargetAtTime(dv * 0.55, now, timeConst);
      droneGain[2].gain.setTargetAtTime(dv * 0.3,  now, timeConst);
      noiseNode._gain.gain.setTargetAtTime(cfg.noiseAmt, now, timeConst);
      noiseNode._filter.frequency.setTargetAtTime(Math.max(100, cfg.color - cfg.tension * 100), now, timeConst);

      baseMasterLevel = 0.15 + cfg.tension * 0.08;
      master.gain.setTargetAtTime(baseMasterLevel, now, timeConst);
    }

    function duck() {
      if (!init || !ctx || !duckGain) return;
      duckGain.gain.setTargetAtTime(0.55, ctx.currentTime, 0.6);
    }

    function unduck() {
      if (!init || !ctx || !duckGain) return;
      duckGain.gain.setTargetAtTime(1.0, ctx.currentTime, 0.8);
    }

    function silence() {
      if (!init || !ctx || !master) return;
      // Cancel any breath modulation and ramp master to zero cleanly
      master.gain.cancelScheduledValues(ctx.currentTime);
      master.gain.setTargetAtTime(0, ctx.currentTime, 1.0);
    }

    return { init: initialize, apply: applyState, duck, unduck, silence };
  })();

  /* ── Narrative Progression ──────────────────────────────────────── */
  function updateUI() {
    counterEl.textContent = `${current + 1} / ${TOTAL}`;
    volTagEl.textContent = `Vol. ${volKey} — ${VOL_INFO[volKey].name}`;
  }

  function enterEntry(idx, immediate = false) {
    if (idx >= TOTAL) return;
    resetScrollAccum();
    current = idx;
    const entry = entries[idx];
    const bh = document.getElementById('bh');
    bh.className = entry.bh !== 'none' ? entry.bh : '';

    if (audioOn && entry.audio) AudioEngine.apply(entry.audio);

    if (window.__gol) {
      let gm = 'normal';
      if (idx === TOTAL - 1) gm = 'glider';
      else if (idx === TOTAL - 2) gm = 'dying';
      window.__gol.setMode(gm);
    }

    document.querySelectorAll('.entry').forEach(e => e.classList.remove('active', 'excerpt-dimmed'));
    document.body.classList.remove('in-full-view');
    fullViewOpen = false;
    if (audioOn) AudioEngine.unduck();

    // Reset any open full panels
    document.querySelectorAll('.entry-full').forEach(fp => {
      fp.classList.remove('revealed');
      fp.scrollTop = 0;
      fp.querySelectorAll('.full-para').forEach(p => p.classList.remove('in'));
    });

    const activeEntry = document.getElementById('e' + idx);
    activeEntry.classList.add('active');

    document.querySelectorAll('.block, .illus').forEach(el => {
      el.classList.remove('in');
      el.style.opacity = '';
      el.style.transform = '';
    });
    const blocks = activeEntry.querySelectorAll('.block');
    blocks.forEach((b, i) => { setTimeout(() => { b.classList.add('in'); }, immediate ? i * STAGGER_IMMEDIATE_STEP : STAGGER_BASE + i * STAGGER_STEP); });

    if (entry.illus) {
      const illusEl = entry.illus === 'flower' ? document.getElementById('flower-svg') : document.getElementById('shoes-svg');
      if (illusEl) setTimeout(() => { illusEl.classList.add('in'); }, immediate ? ILLUS_IMMEDIATE_DELAY : STAGGER_BASE + blocks.length * STAGGER_STEP + ILLUS_STAGGER_BUFFER);
    }

    updateUI();
    promptEl.classList.add('hidden');
    const illusDelay = entry.illus ? ILLUS_REVEAL_DELAY : 0;
    setTimeout(() => { promptEl.classList.remove('hidden'); }, immediate ? PROMPT_IMMEDIATE_DELAY : STAGGER_BASE + blocks.length * STAGGER_STEP + illusDelay + PROMPT_BUFFER);
  }

  function advance() {
    if (isTransitioning || isMenuOpen || isOrbSelecting) return;
    const activeEntry = document.getElementById('e' + current);
    if (!activeEntry) return;

    activeEntry.querySelectorAll('.block, .illus').forEach(el => el.classList.remove('in'));
    promptEl.classList.add('hidden');

    if (current < TOTAL - 1) {
      isTransitioning = true;
      setTimeout(() => {
        activeEntry.classList.remove('active');
        enterEntry(current + 1);
        isTransitioning = false;
      }, ADVANCE_SWAP_DELAY);
    } else {
      AudioEngine.silence();
      openVolumes();
    }
  }

  function tryStartAudio() {
    if (!audioOn && entries && entries[current]) {
      audioOn = true; AudioEngine.init();
      if (entries[current].audio) AudioEngine.apply(entries[current].audio);
    }
  }

  document.addEventListener('keydown', e => {
    tryStartAudio();
    if (e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowRight') {
      e.preventDefault();
      if (fullViewOpen) { closeFullPanel(); setTimeout(() => advance(), PANEL_CLOSE_ADVANCE_DELAY); }
      else advance();
    }
    if (e.key === 'ArrowLeft' || e.key === 'Escape') {
      if (fullViewOpen) closeFullPanel();
    }
  });

  document.addEventListener('click', e => {
    if (e.target.closest('.overlay') || e.target.closest('.top-btn') || e.target.closest('#orb-menu') || e.target.closest('.full-collapse')) return;
    tryStartAudio();
    if (fullViewOpen) { closeFullPanel(); setTimeout(() => advance(), PANEL_CLOSE_ADVANCE_DELAY); }
    else advance();
  });

  /* ── Background: Film Grain ─────────────────────────────────────── */
  (function(){
    const gc = document.getElementById('grain'), gx = gc.getContext('2d');
    let gW = 0, gH = 0;
    function rz() { gW = gc.width = window.innerWidth; gH = gc.height = window.innerHeight; }
    rz(); window.addEventListener('resize', rz);

    // Pre-render a handful of small noise tiles once, instead of regenerating
    // full-screen per-pixel noise every frame (that was the biggest CPU cost in the app).
    // Each frame just tiles one of these across the screen with a randomized offset.
    const TILE = 160;
    const patterns = Array.from({length: 5}, () => {
      const tc = document.createElement('canvas');
      tc.width = TILE; tc.height = TILE;
      const tx = tc.getContext('2d');
      const id = tx.createImageData(TILE, TILE), d = id.data;
      for (let i = 0; i < d.length; i += 4) {
        const v = Math.random() * 255 | 0;
        d[i] = d[i+1] = d[i+2] = v; d[i+3] = (Math.random() * 30 + 10) | 0;
      }
      tx.putImageData(id, 0, 0);
      return gx.createPattern(tc, 'repeat');
    });

    const FRAME_MS = 1000 / 18; // grain reads the same to the eye well below 60fps
    let lastTime = 0;

    function render(time) {
      requestAnimationFrame(render);
      if (document.hidden) return;
      if (time - lastTime < FRAME_MS) return;
      lastTime = time;
      if (gW <= 0 || gH <= 0) return;

      const pattern = patterns[(Math.random() * patterns.length) | 0];
      const ox = (Math.random() * TILE) | 0, oy = (Math.random() * TILE) | 0;
      gx.clearRect(0, 0, gW, gH);
      gx.save();
      gx.translate(ox, oy);
      gx.fillStyle = pattern;
      gx.fillRect(-ox, -oy, gW + TILE, gH + TILE);
      gx.restore();
    }
    requestAnimationFrame(render);
  })();

  /* ── Background: Game of Life ───────────────────────────────────── */
  (function(){
    const gc = document.getElementById('gol'), gx = gc.getContext('2d');
    const CELL = 6;
    let cols = 0, rows = 0, grid, next, mode = 'normal', dead = false, rstTid = null, golColor = '#fff';

    function fetchColor() { golColor = getComputedStyle(document.body).getPropertyValue('--gol').trim() || '#fff'; }
    function resize() {
      const w = window.innerWidth, h = window.innerHeight;
      if (w === 0 || h === 0) return;
      gc.width = w; gc.height = h; cols = Math.ceil(w / CELL); rows = Math.ceil(h / CELL);
      grid = Array.from({length: rows}, () => Array.from({length: cols}, () => Math.random() < 0.12 ? 1 : 0));
      next = Array.from({length: rows}, () => new Array(cols).fill(0));
      dead = false; fetchColor();
    }
    function nbr(g, r, c) {
      let n = 0;
      for (let dr = -1; dr <= 1; dr++) for (let dc = -1; dc <= 1; dc++)
        if (!(dr === 0 && dc === 0)) n += g[(r + dr + rows) % rows][(c + dc + cols) % cols];
      return n;
    }
    function step() {
      if (mode === 'dying' && !dead) {
        for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) grid[r][c] = 0;
        dead = true; rstTid = setTimeout(() => { mode = 'glider'; resize(); seedGlider(); }, 2200); return;
      }
      for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
        const k = nbr(grid, r, c); next[r][c] = (grid[r][c] ? (k === 2 || k === 3) : (k === 3)) ? 1 : 0;
      }
      let t = grid; grid = next; next = t;
    }
    function seedGlider() {
      const cx = Math.floor(cols * 0.25), cy = Math.floor(rows * 0.35);
      [[0,1,0], [0,0,1], [1,1,1]].forEach((row, dr) => { row.forEach((v, dc) => { if (v) grid[(cy + dr) % rows][(cx + dc) % cols] = 1; }); });
    }
    function draw() {
      if (cols === 0 || rows === 0) return;
      gx.clearRect(0, 0, gc.width, gc.height); gx.fillStyle = golColor;
      for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) if (grid[r][c]) gx.fillRect(c * CELL, r * CELL, CELL - 1, CELL - 1);
    }
    const STEP_MS = 1000 / 12; // simulation doesn't need 60fps to read as "alive" — cuts the per-frame cost ~5x
    let lastStep = 0;
    function loop(time) {
      requestAnimationFrame(loop);
      if (document.hidden) return;
      if (time - lastStep < STEP_MS) return;
      lastStep = time;
      step(); draw();
    }

    window.addEventListener('resize', resize);
    window.__gol = { setMode: (m) => { mode = m; if (rstTid) { clearTimeout(rstTid); rstTid = null; } if (m === 'normal') resize(); else if (m === 'dying') dead = false; }, updateColor: fetchColor };
    resize(); requestAnimationFrame(loop);
  })();

  /* ── Boot ───────────────────────────────────────────────────────── */
  document.body.className = 'sch-dark in-menu';
  if (window.__gol) window.__gol.updateColor();
  openVolumes();

})();
