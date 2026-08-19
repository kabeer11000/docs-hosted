/* ── Content Definitions ─────────────────────────────────────────────── */
const VOL_INFO = {
  1: { name: 'Volume I',  sub: 'September — December 2023', theme: 'sch-dark' },
  2: { name: 'Volume II', sub: 'May — June 2026', theme: 'sch-inv' }
};

const VOL = {
  1: [
    { label:'01 — September 1', bh:'none', illus:null, blocks:[
      { cls:'w', t:'I ended us at 1:25 in the morning.' },
      { cls:'w', t:'Fixed the car. Fixed the code.' },
      { cls:'g', t:'But the silence in the drawing room was loud.' }
    ], full:[
      { cls:'', t:"I had a good time today. I left early in the morning to go to my university. In a fascinating lecture, we talked about a brand-new Scrabble-related project. I knew I had to finish this project by the deadline, so I worked on it for almost the whole night, staying up late, and reading articles." },
      { cls:'', t:"After class, I headed home. On my way, I ran into my school friend's younger brother. It had been a while since I had seen him, and he had grown so much. Once I got home, I took my car to the mechanic. It had a dent that needed fixing and required some repainting." },
      { cls:'', t:"In the evening, I decided to take a walk to clear my head. I got really sleepy during the walk, probably due to the lack of rest from the previous nights." },
      { cls:'italic', t:"Lastly, I had a disagreement with my ex-girlfriend last night. We decided never to talk to each other ever again and part ways. We ended our call around 1:25 am. I fell asleep shortly after." }
    ], audio:{ pitch:75, tension:0.2, noiseAmt:0.05, color:300 } },

    { label:'02 — September 4', bh:'none', illus:null, blocks:[
      { cls:'w', t:'I saw a father struggling with his bike.' },
      { cls:'w', t:'It broke something open in me.' },
      { cls:'g', t:'Then Priya texted me from across the grass.' }
    ], full:[
      { cls:'', t:"Today got off to a late start. I'm feeling a bit down, perhaps feeling lonely cause of my old breakup or the minor argument with Mamu. I'm doing my best to not let these things get to me, but they've got me thinking about what it's like not having a dad around." },
      { cls:'', t:"On my way to my Islamiat class, I witnessed a father struggling with his bike, his wife and kids standing nearby in school uniforms. It seemed their bike had run out of petrol. As I drove past, it struck me deeply, maybe because of my own fatherless experience. I realized the importance of fathers in families, their sacrifices to provide for their children." },
      { cls:'', t:"Afterward, Priya and the gang joined me. Later, Hamza joined us, and we ended up on the grass in front of G&T, having a great time with songs and jokes. Feeling a bit bored, I lay down on my back with my head on my backpack." },
      { cls:'italic', t:"Priya started texting me while sitting right in front of me, and then she came over to sit beside me, and we even shared playlists. It was kind of cute, and I might even be developing a crush on her." }
    ], audio:{ pitch:85, tension:0.15, noiseAmt:0.05, color:350 } },

    { label:'03 — September 11', bh:'none', illus:'shoes', blocks:[
      { cls:'w', t:'I rehearsed the line about Menaka\'s shoes all day.' },
      { cls:'w', t:'We got high and touched another dimension.' },
      { cls:'g', t:'But it was Priya\'s playlist I kept coming back to.' }
    ], full:[
      { cls:'', t:"My situation-ship with Menaka was a really dreamy experience. Those moments when she would slightly glance my way as we left class are etched into my memory. One day, I found her in the cafeteria. I collected the courage to compliment her white converse shoes. 'I love your shoes,' I said casually, even though I had been rehearsing that line all day." },
      { cls:'', t:"My time with Menaka was a mix of excitement and emotions. We flirted endlessly through text messages. I smoked my very first joint with her, we would spend nights talking and laughing while under the influence. It felt like an entirely different universe when we were together." },
      { cls:'', t:"Recently, I've been getting closer to another girl, Priya. Our connection is almost perfect, and our sense of humor aligns perfectly. We're always snickering at dirty inside jokes. Last night, I listened to and added the song 'Let Go' by Arc Patrol to our love-child playlist." },
      { cls:'italic', t:"Listening to it brought back a flood of memories. It instantly transported me back to those times when I used to get high with Menaka, but it was Priya's music I kept coming back to." }
    ], audio:{ pitch:110, tension:0.25, noiseAmt:0.12, color:280 } },

    { label:'04 — September 17', bh:'none', illus:null, blocks:[
      { cls:'w', t:'Priya walked in late, fashionably, beautifully.' },
      { cls:'w', t:'I snapped a photo, she blushed.' },
      { cls:'g', t:'In a room full of innovators, I only saw her.' }
    ], full:[
      { cls:'', t:"There's something electrifying about being in a room filled with minds set on the same wavelength. Today was the Google Developer Conference at the IBA Faisal Bank Auditorium. The speakers delved deep into the realm of web vitals and AI technologies. They weren't just talking about technology; they were painting a picture of what's possible." },
      { cls:'', t:"Priya, fashionably late, sauntered in after the conference began. With a mischievous grin, I snapped a candid photo and messaged her, teasingly saying, 'Spotted a really pretty girl,' just to witness her cheeks flush with a blush from across the room." },
      { cls:'italic', t:"It's these small, intimate moments that make an event like this feel like home. I left with a head brimming with new ideas, and a soul recharged with the sheer magic of human innovation." }
    ], audio:{ pitch:120, tension:0.3, noiseAmt:0.08, color:380 } },

    { label:'05 — September 23', bh:'none', illus:null, blocks:[
      { cls:'w', t:'I built walls out of abstraction and code.' },
      { cls:'w', t:'Trying to make something sustainable.' },
      { cls:'g', t:'While knowing nothing about us was.' }
    ], full:[
      { cls:'', t:"After weeks of toiling, I finally finished my research paper on architectural insights in large-scale blogging systems. It was a journey that started with the need to build robust and sustainable platforms for sharing knowledge and ideas." },
      { cls:'', t:"The paper delves into the architectural considerations that underpinned my projects, highlighting the significance of abstraction, splitting, and maintainability. Witnessing how these principles transformed my blogging engines from brittle creations to robust systems was truly rewarding." },
      { cls:'italic', t:"But the journey wasn't just about technical aspects. It was also about the evolution of my understanding as a developer. I learned to embrace abstraction as a powerful tool for flexibility. I built walls out of code, trying to make something sustainable, while knowing nothing about us was." }
    ], audio:{ pitch:95, tension:0.1, noiseAmt:0.05, color:400 } },

    { label:'06 — October 1', bh:'sz-1', illus:null, blocks:[
      { cls:'w', t:'Waking up in the smoke of my own ruin.' },
      { cls:'w', t:'I am a fractured mirror, addicted to the ghost of her.' },
      { cls:'r', t:'Loving Priya at night, forgotten by day.' }
    ], full:[
      { cls:'', t:"Waking up to lingering smells of smoke that hangs heavy in the air. Coming to my senses, I try to take back control, putting up my other, clean alter-ego. I never thought I would feel this way, being lonely surrounded by other people. Having fun with people seems like an awful coping mechanism to the pain." },
      { cls:'', t:"I love her, with all of my heart, with the desperation of a lost soul. But I'm like a fractured mirror, reflecting back broken images of a man I don't recognize. Drugs are the anesthetic, numbing my emotions, letting me be on a path to self-destruction." },
      { cls:'accent', t:"She is playing me, I know that. Just loving me at night and forgetting me during the day. She takes advantage of my weaknesses. She is in complete control of me. I am just a distraction for her, but being used by her is a truly lovely experience." }
    ], audio:{ pitch:55, tension:0.7, noiseAmt:0.2, color:180 } },

    { label:'07 — October 4', bh:'none', illus:null, blocks:[
      { cls:'w', t:'Bureaucracy and panic, running out of time.' },
      { cls:'w', t:'Then the bass dropped in my headphones.' },
      { cls:'g', t:'For a second, I was the protagonist.' }
    ], full:[
      { cls:'', t:"I applied for the SEEF scholarship quite impulsively. It was the night before the scholarship deadline when my friend Rayan brought it up, asking me if I had applied. I was taken aback. In a rushed effort, I submitted my application the next day, fully aware that my documents were incomplete." },
      { cls:'', t:"Today, before my Islamiyat quiz, I hurried to get my domicile created. At the government office, the front desk staff informed me that I needed to get my documents attested. After about 30 minutes of navigating the bureaucracy, I finally found someone who could attest my papers." },
      { cls:'italic', t:"Amidst these stressful moments, I turned to the old soundtracks from the movie 'TENET'. There's something about the tension they build that I find addictive. Today, while heading to my class, I was listening to the 'Trucks in Place' soundtrack. There's a beat drop at around the one-minute mark, and somehow, it synced perfectly with the moment I stepped inside the building. For a second, I was the protagonist." }
    ], audio:{ pitch:70, tension:0.6, noiseAmt:0.15, color:220 } },

    { label:'08 — October 6', bh:'none', illus:null, blocks:[
      { cls:'w', t:'A man shattered in the hospital corridor.' },
      { cls:'w', t:'I bought cough syrup and walked away.' },
      { cls:'g', t:'Hell broke loose for him, I just kept moving.' }
    ], full:[
      { cls:'', t:"Today, amidst the chaos of Ahmed Medical Complex, I encountered a man whose grief tore through the fabric of everyday life. He stood there, a portrait of despair, wrestling with the agony of his mother's passing. His anguish, raw and palpable, hung heavy in the air." },
      { cls:'', t:"As I navigated the bustling corridors, attempting to fulfill my cousin's urgent need for cough medication, I observed this man lost in the throes of mourning. The juxtaposition felt surreal—his world in shambles while I focused on procuring remedies for a cough." },
      { cls:'italic', t:"It struck me—how one person could be enveloped in such profound anguish while another, in the same space, remained consumed by the banalities of daily life. Hell broke loose for him, while I mechanically attended to the mundane." }
    ], audio:{ pitch:60, tension:0.5, noiseAmt:0.1, color:200 } },

    { label:'09 — October 11', bh:'sz-1', illus:null, blocks:[
      { cls:'w', t:'My hands are cold, my heart is sinking.' },
      { cls:'w', t:'I am terrified of losing Priya before I even have her.' },
      { cls:'g', t:'But I rescued two kittens from the dark.' }
    ], full:[
      { cls:'', t:"I've been experiencing terrible anxiety for the past week, including back-to-back panic attacks. My condition appears to be improving since I started walking to deal with the situation, but even as I'm writing this, my hands and feet are still moist and cold. I think that my love and devotion to Priya contribute to some of my anxiousness." },
      { cls:'', t:"Our relationship has been rapidly developing. I nearly have the impression that we were meant to be together. But I also have a lot of other thoughts since being with her has made me more aware of a lot of my other anxieties. One of my biggest worries has grown to be losing her." },
      { cls:'italic', t:"During the ITC quiz, everyone gathered on the main campus. I didn't talk to her much that day because my anxiousness was through the sky. She stared into my eyes and I was on the verge of crying, forcing me to look away. When I went outside to get a drink, Hina and Zara were already there." },
      { cls:'', t:"I rescued two kittens during the past two weeks. On our walk back from Gate 2 KU, Ali and I overheard a kitten screaming in one of the bushes. She was small and suffering from an eye infection. We made the choice to take her home. After a 30-minute standoff with a pack of stray dogs, we eventually made it there." }
    ], audio:{ pitch:80, tension:0.8, noiseAmt:0.18, color:250 } },

    { label:'10 — October 16', bh:'none', illus:null, blocks:[
      { cls:'w', t:'A beggar in the neon dark, a boy in a car.' },
      { cls:'w', t:'Two worlds touching through the glass.' },
      { cls:'g', t:'Imaginary connections in a lonely city.' }
    ], full:[
      { cls:'', t:"In the dimly lit streets of Karachi, where the night wraps itself around the bustling city, a transgender beggar intersects paths with a weary soul—let's call him Samir. Samir, a university student, finds solace in these nightly encounters, although he remains lost in the cacophony of his thoughts." },
      { cls:'', t:"Their first meeting was a moment of vulnerability for Samir. Anxious and fatigued, he sought refuge in the confines of his car, only to be approached by the beggar. Resting her head against the door, he engaged in a conversation that lingered in his memory." },
      { cls:'italic', t:"Days passed, and their encounters became sporadic yet strangely comforting. He couldn't decipher her reluctance to engage beyond the transactional realm of begging, yet he nurtured an inexplicable hope of one day sharing life stories with her. Perhaps, in another life, their paths would intertwine beyond these fleeting moments on the Karachi streets." }
    ], audio:{ pitch:65, tension:0.4, noiseAmt:0.1, color:240 } },

    { label:'11 — October 20', bh:'none', illus:null, blocks:[
      { cls:'w', t:'Coffee, code, and a screen glowing at 6 AM.' },
      { cls:'w', t:'I built an empire of apps while the world slept.' },
      { cls:'g', t:'Exhausted, but for the first time, triumphant.' }
    ], full:[
      { cls:'', t:"I spent all night coding. Fueled by coffee and pure determination, I finally finished it. I created an app store called 'Kabeer's Appstore'. It's like APK Pure or Google Play, but with a twist. It uses Bundletool to analyze devices and generate custom APKs for each one." },
      { cls:'', t:"Underneath the hood, the backend hums with the power of Kubernetes and Node.js, while the UI is a feat of my own creation, built using Expo. It looks beautiful with Google's Material Framework." },
      { cls:'italic', t:"A sense of accomplishment washes over me. It's more than just code; it's a testament to my dedication. I pushed myself beyond limits. Tired but triumphant, I welcome the rest. Tomorrow brings a new day, and with it, the continuation of the quest for app store domination." }
    ], audio:{ pitch:130, tension:0.5, noiseAmt:0.15, color:350 } },

    { label:'12 — November 3', bh:'sz-1', illus:null, blocks:[
      { cls:'w', t:'A child on a bike in a desolate fall.' },
      { cls:'w', t:'A car, a wall, a toy with a tire mark.' },
      { cls:'r', t:'Imaginary destruction knows no bounds.' }
    ], full:[
      { cls:'', t:"In a warm, desolate neighborhood during fall, I saw a lonely child riding a bicycle equipped with training wheels. The wide road and wealthy surroundings suggested affluence, yet the absence of any residents except for this lone child adds an eerie tone to the scene. It felt like something was off." },
      { cls:'', t:"The child's lonely presence transformed everything into a surreal scenario. It almost felt like his sole existence transcended his physical form to become a metaphorical concept, such as a dream destroyed by the reckless actions of others." },
      { cls:'italic', t:"Fast-forward to a contrasting scene. I see the nighttime revelry of a person indulging in drink and reckless driving. Then an unusual sequence unfolds where the car hits the child from behind. The car continues for a moment before colliding with a wall in a comically non-dramatic manner." },
      { cls:'accent', t:"Tragically, the child now lay lifeless on the ground. I shifted focus to the child's toy, bearing a tire mark and lying as flat as him, symbolizing the profound and significant loss that has just occurred while preserving a peculiar sense of dark comedy. Imaginary destruction knows no bounds." }
    ], audio:{ pitch:50, tension:0.65, noiseAmt:0.12, color:190 } },

    { label:'13 — November 7', bh:'sz-2', illus:'flower', blocks:[
      { cls:'w', t:'I brought Priya flowers and she smiled.' },
      { cls:'w', t:'We danced until my shirt was untucked.' },
      { cls:'g', t:'I thought I had found the center of the universe.' }
    ], full:[
      { cls:'', t:"The night of the IBA welcome celebration was filled with excitement and anticipation. Wearing my old suit, I was excited and apprehensive at the same time. A romantic addition to my drive to the university was the bouquet of flowers I had for my date, Priya, lying in the passenger seat." },
      { cls:'', t:"The satisfaction of seeing her smile when I handed her the bouquet was enough of a reward. Tonight seemed like a celebration of the true connection that grew out of the original spark of desire we had. The air was heavy with music, the dance floor beckoned with the promise of unbridled ecstasy." },
      { cls:'italic', t:"Priya and I lost ourselves in the rhythm, our bodies swaying in perfect harmony. Later, as I dropped Priya off at the gate, there was a tinge of sadness in the air. Returning to the party, I continued to dance until the music stopped and the lights came on. Exhausted but exhilarated, I finally left, coatless and shirt untucked, a testament to the night's unadulterated joy." }
    ], audio:{ pitch:140, tension:0.35, noiseAmt:0.08, color:390 } },

    { label:'14 — November 20', bh:'none', illus:null, blocks:[
      { cls:'w', t:'Travis Scott through the laptop speakers.' },
      { cls:'w', t:'We sang the spaces between the words.' },
      { cls:'g', t:'We fell asleep connected, breathing in sync.' }
    ], full:[
      { cls:'', t:"The night thrummed with anticipation as I awaited Priya's call. My laptop, poised on my bed, felt like a portal to our own personal concert. The moment her name lit up the screen, excitement bloomed within me. As I clicked play, Travis Scott's beats filled the air, resonating with the rhythm of my racing heart." },
      { cls:'', t:"We sang, not just the words, but the spaces between them, filling them with silly ad-libs and playful sounds. Our room, bathed in the soft glow of the laptop screen, became our stage. For two hours, we sang our hearts out, exploring an emotional rollercoaster of genres." },
      { cls:'italic', t:"Drowsiness washed over us, but we didn't hang up. We fell asleep connected, the soft sounds of our breathing filling the silence. That night, under the sheets, we created a symphony of music, laughter, and vulnerability." }
    ], audio:{ pitch:115, tension:0.4, noiseAmt:0.1, color:320 } },

    { label:'15 — November 22', bh:'dead', illus:null, blocks:[
      { cls:'w', t:'She asked what we were going to be.' },
      { cls:'w', t:'I teared up, because I didn\'t know.' },
      { cls:'r', t:'She said it hurts too much, and walked away.' }
    ], full:[
      { cls:'', t:"I think it's often the things you want to protect with all your heart that you end up losing. After everything, she had a talk with me yesterday. She prepared a long list of questions to ask me. 'Why did you have to text her?' 'Why wouldn't you just open up to me, loser?' she sounded calm, but I could see the damage right there on her face." },
      { cls:'', t:"I answered every question except when she asked me, 'What do you want us to be now?' I teared up, but I didn't have an answer to it. We spent hours together, finding solace in the silence and the touch we once took for granted. When I finally hugged her, she hugged me right back, holding me close and tight." },
      { cls:'', t:"Just when I showed her the website I made for her, she had already sent me a text. 'I don’t know if I can do this' she told me, she was just staring at a wall, thinking for an hour." },
      { cls:'accent', t:"'I don’t think I can be with you.' 'It hurts too much.' All my optimism died right there. She was hurting too much to try. It was the end. I love her, with every fiber of my being, and I know she loves me too. But I messed it all up, and now all I can do is nod along to her decisions." }
    ], audio:{ pitch:40, tension:0.95, noiseAmt:0.25, color:150 } },

    { label:'16 — November 23', bh:'dead', illus:null, blocks:[
      { cls:'w', t:'I deleted the app just to stop looking for her.' },
      { cls:'w', t:'Staring at a photo of us drawing on each other\'s faces.' },
      { cls:'g', t:'The life I need feels a little distant.' }
    ], full:[
      { cls:'', t:"I stumbled out of bed late, missed my class, and rushed through a shower, barely awake. Then, I hustled off to my Lab like a zombie. An hour passed, maybe more, buried in assignments. Finally, I hit a wall, so I cranked up some Travis Scott, the slowed-down, reverb version. That music dredged up emotions I'd buried deep." },
      { cls:'', t:"I couldn't resist checking my phone, hoping for a text from her. But when I reached for Instagram, I realized I'd already deleted it to help me move the hell on. It hit hard—this stark reminder that I'm knee-deep in trying to let go." },
      { cls:'italic', t:"Remembering those mornings we spent together, asking her for selfies to kickstart my day. Now, in this twisted present, I kickstarted today with a photo I took of her yesterday, when we were goofing around, drawing stuff on each other's faces. It's a reminder of what was, what's gone, and what I'm holding onto." }
    ], audio:{ pitch:45, tension:0.85, noiseAmt:0.2, color:160 } },

    { label:'17 — November 28', bh:'none', illus:null, blocks:[
      { cls:'w', t:'Priya, Talha, and I sneaked to the third floor.' },
      { cls:'w', t:'I bounced and screamed until I was hollow.' },
      { cls:'g', t:'Music to drown out the silence she left.' }
    ], full:[
      { cls:'', t:"After enduring a slew of so-so acts and local bands at IBA, Priya, Talha and I sneaked to the third floor, and sat there in peace and quiet, however soon rushed back down to the stage because we were told that Zahid had entered the campus." },
      { cls:'', t:"The moment Zahid stepped onto that stage, everything changed. The vibe, the energy, it all elevated. I was bouncing like a human pogo stick, hands high up in the air, riding that wave of music and emotion. His older songs? Unforgettable. They hit differently, in all the right ways." },
      { cls:'italic', t:"It’s nights like these that etch themselves into memory. The kind that makes you believe in the power of music to connect, to transport you, to make you feel alive. And Mustafa Zahid? He didn’t just perform; he owned that stage and everyone in the room." }
    ], audio:{ pitch:125, tension:0.6, noiseAmt:0.2, color:300 } },

    { label:'18 — December 1', bh:'none', illus:null, blocks:[
      { cls:'w', t:'The throne couch in the dark drawing room.' },
      { cls:'w', t:'Where I go to channel the energy of losing her.' },
      { cls:'g', t:'Two couches now. One for grief, one for grace.' }
    ], full:[
      { cls:'', t:"I successfully wasted an entire day without studying a single word today. I woke up quite pleasantly, waking up to pretty texts from my ex-girlfriend. The day started with me scrolling and watching reels and short clips online." },
      { cls:'', t:"When I was little, whenever I used to get mad or sad, I used to come to a single sofa in our drawing room. The sofa faced a wide open window and I used to sit on it like it was a throne of some sort, and feel like a king trying to channel my emotional energy. After every fight I would see myself coming back, and back again to that couch." },
      { cls:'italic', t:"Because the drawing room was dark and long, I used to be scared of going in there unaccompanied, but in the heat of emotions I wouldn't be scared to enter it and sit on the couch. After a few more times of coming here, I added a second couch right besides it. Called it the happy couch. Here I would sit and do my stuff and be happy and grateful for my happiness. To this day the 'throne couch' gives me relief during anxiety and makes me feel powerful and in control." }
    ], audio:{ pitch:75, tension:0.3, noiseAmt:0.08, color:280 } },

    { label:'19 — December 3', bh:'sz-1', illus:null, blocks:[
      { cls:'w', t:'Ali and I rode into the KU jungles under the moon.' },
      { cls:'w', t:'Wild dogs, abandoned buildings, cold wind.' },
      { cls:'g', t:'We ate Oreo ice cream and survived the night.' }
    ], full:[
      { cls:'', t:"Ali and I, with our old bikes and a thirst for adventure, ventured into the mysterious depths of the Karachi University jungles. The moon cast a glow on the overgrown paths, guiding us through the silent wilderness. Our bikes, relics of a bygone era, creaked and groaned in protest, but we pushed on, fueled by youthful enthusiasm." },
      { cls:'', t:"More than once, we found ourselves face-to-face with packs of wild dogs, their guttural growls echoing through the night. But we held our ground, hearts pounding, adrenaline coursing through our veins. The fear was exhilarating." },
      { cls:'italic', t:"Our ultimate destination: Gate 2, where pure indulgence awaited – my favorite Oreo ice cream. As we devoured the creamy treat, the sweet reward washed away the fear and fatigue. Exhausted but exhilarated, we shared a knowing smile. Another night adventure etched into our memories, a bond strengthened by shared fear, laughter, and the thrill of exploration." }
    ], audio:{ pitch:90, tension:0.45, noiseAmt:0.15, color:320 } }
  ],

  2: [
    { label:'01 — May 17, 2026', bh:'dead', illus:null, blocks:[
      { cls:'w', t:'It’s been a long while since the words would come.' },
      { cls:'w', t:'I am hollowed out, passing the stray animals.' },
      { cls:'r', t:'Quietly, persistently, I feel unloved.' }
    ], full:[
      { cls:'', t:"It's been a long while since we've talked. I tried to sit and write on multiple occasions but the words just wouldn't come. I'd open the page and nothing. So whatever this is today, I'm not going to question it too hard. God knows why today was different — and I mean that with some peace and a little lostness both." },
      { cls:'', t:"Last night I was on a call with Prema, telling her how everything has been annoying me lately. How I feel hollowed out. She listened, and I vented, and I kept it surface enough that nothing became a fight. I didn't go to the harder places. I didn't tell her she was one of them." },
      { cls:'', t:"Every animal I see in need I pass with a quiet 'I can't save everyone' and keep moving. I say it like a mantra, like if I repeat it enough it'll stop feeling like a cop-out. The truth is if I could save every last one I would. I would burn myself down doing it." },
      { cls:'', t:"My mother and I have been distant lately, strained in a way that's hard to articulate. One of my closest friends has quietly retreated into sending reels — no real conversation, just content. And then there's the breakup. The second one. The one that wasn't clean." },
      { cls:'italic', t:"Three years with someone leaves a mark. We ended, and then she cried and insisted we stay friends, and then we kept finding our way back to each other in ways that weren't quite friendship. She wouldn't be loyal but she wouldn't let go either. Every time I tried to go no contact she'd pull me back, and I'd let her, because three years does something to your instincts." },
      { cls:'accent', t:"Somewhere along the way she grew into someone different — someone who judges me, who looks at me with a kind of tiredness that feels like contempt. I don't think she fell out of love with who I am. I think she fell out of love with who she wanted me to be. All of it together has settled into this feeling of being unloved. Not dramatically. Just quietly, persistently. Like a low sound you can't locate." }
    ], audio:{ pitch:60, tension:0.75, noiseAmt:0.15, color:200 } },

    { label:'02 — June 29, 2026', bh:'sz-1', illus:null, blocks:[
      { cls:'w', t:'I vouched for you, told them you were ten times better.' },
      { cls:'w', t:'You took his dad\'s connections and called my offer stupid.' },
      { cls:'r', t:'I am done being the one who shows up first.' }
    ], full:[
      { cls:'', t:"Got on a call with Zayd today about problems I've been facing running the startup. We talked about bad founding partners, the right mindset, what to expect going in. He recommended some books. It was a good call, grounding, the kind of conversation I needed." },
      { cls:'', t:"Then mid-call he asked why I hadn't partnered with Nadeem on this. I told him I was restructuring specifically so I could do that. Then he asked me if I knew anyone like Nadeem, you know someone he'd want to hire. I pushed back, asked why not Nadeem directly. He said Nadeem was already with Contour, something about his dad's contacts." },
      { cls:'', t:"I didn't see that coming. I kept it together on the call, told Zayd I'd reach out. We got off and I sent him a voice message right away — casually, telling him I fixed him the job almost he just has to discuss scope and pay, and then just asking what the Contour thing was about." },
      { cls:'italic', t:"What I didn't say was that I'd spent weeks convincing Zayd to consider him. That I'd told my employer, to his face, that Nadeem was ten times more productive than me. I meant it when I said it. I wanted him in." },
      { cls:'', t:"He replied with two voice messages. He was angry. The gist of it — why would he grind at some small job when he could walk into Contour through his dad? He called it a stupid job. That it's just a Khwari which maybe I get." },
      { cls:'', t:"Because I can't pay my fees right now. I've been quietly carrying that while holding this thing together, and Nadeem knows it. We were both broke not long ago. We lost all our clients, hit zero, and I took up this job to climb back out. When I did, I let him keep the full money from the one client we still had so he could clear part of what he owed. The rule was 50/50, he worked on it, so it felt right. It felt like something a friend does." },
      { cls:'accent', t:"What I feel isn't really anger. It's embarrassment — that I vouched so hard, that I said ten times, out loud, to my employer. And underneath that, disappointment. Not because he took the Contour job, I'm genuinely glad for him. It's that I found out the way I did. That his plans, his ambitions, his dad's connections — none of that came from him. It came from Zayd." },
      { cls:'italic', t:"It's relief and loss at the same time. Relief because something I'd been half-sensing is now just true, I don't have to wonder anymore, I don't have to keep pulling. Loss because I like him, I genuinely do. This isn't like when I finally let go of my ex — that was a different kind of grief, longer, deeper, something I loved that I had to consciously walk away from. This is quieter. Nadeem and I aren't done or anything, not yet. But I think I'm done being the one who shows up first. I'll live my own for now." }
    ], audio:{ pitch:70, tension:0.6, noiseAmt:0.1, color:260 } }
  ]
};
const illustHTML = {
  flower: '<svg class="illus" id="flower-svg" viewBox="0 0 120 200" fill="none">' +
    '<line x1="60" y1="200" x2="60" y2="100" stroke-width="1.5"/>' +
    '<path d="M60 150 Q42 140 35 150 Q42 160 60 152" stroke-width="1"/>' +
    '<path d="M60 165 Q78 155 85 165 Q78 175 60 167" stroke-width="1"/>' +
    '<ellipse cx="60" cy="72" rx="12" ry="22" stroke-width="1.2"/>' +
    '<ellipse cx="82" cy="82" rx="12" ry="22" stroke-width="1.2" transform="rotate(72 60 100)"/>' +
    '<ellipse cx="76" cy="108" rx="12" ry="22" stroke-width="1.2" transform="rotate(144 60 100)"/>' +
    '<ellipse cx="44" cy="108" rx="12" ry="22" stroke-width="1.2" transform="rotate(-144 60 100)"/>' +
    '<ellipse cx="38" cy="82" rx="12" ry="22" stroke-width="1.2" transform="rotate(-72 60 100)"/>' +
    '<circle cx="60" cy="100" r="10" stroke-width="1.2"/>' +
    '<circle cx="60" cy="100" r="4" fill="currentColor" fill-opacity="0.15"/>' +
    '</svg>',
  shoes: '<svg class="illus" id="shoes-svg" viewBox="0 0 240 90" fill="none">' +
    '<ellipse cx="52" cy="52" rx="42" ry="18" stroke-width="1.4"/>' +
    '<ellipse cx="52" cy="46" rx="42" ry="14" stroke-width="1.4"/>' +
    '<line x1="30" y1="38" x2="74" y2="38" stroke-width="1"/>' +
    '<line x1="32" y1="38" x2="32" y2="32" stroke-width="1"/><line x1="42" y1="38" x2="42" y2="32" stroke-width="1"/><line x1="52" y1="38" x2="52" y2="32" stroke-width="1"/><line x1="62" y1="38" x2="62" y2="32" stroke-width="1"/>' +
    '<ellipse cx="188" cy="52" rx="42" ry="18" stroke-width="1.4"/>' +
    '<ellipse cx="188" cy="46" rx="42" ry="14" stroke-width="1.4"/>' +
    '<line x1="166" y1="38" x2="210" y2="38" stroke-width="1"/>' +
    '<line x1="168" y1="38" x2="168" y2="32" stroke-width="1"/><line x1="178" y1="38" x2="178" y2="32" stroke-width="1"/><line x1="188" y1="38" x2="188" y2="32" stroke-width="1"/><line x1="198" y1="38" x2="198" y2="32" stroke-width="1"/>' +
    '</svg>'
};
