let ping = async () => {
        let status = false;
        if (navigator.onLine) {
            let res = await $.ajax({
                url: "https://cdn.jsdelivr.net/gh/kabeer11000/notes/ping.txt",
                async: true,
            });
            res!= null||undefined ? status = true:"";
        }
        return status;
    };

    const asyncLocalStorage = {
        setItem: async function (key, value) {
            await null;
            return localStorage.setItem(key, value);
        },
        getItem: async function (key) {
            await null;
            return localStorage.getItem(key);
        }
    };
    try {
        let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        var recognition = new SpeechRecognition();
    } catch (e) {
        console.error(e);
        document.querySelector('.no-browser-support').classList.add('d-block');
    }

    let user_id;
    const setUserID = async () => {
        null == localStorage.getItem("user_id") ? localStorage.setItem("user_id", "123456") : (user_id = localStorage.getItem("user_id"));
    };
    setUserID();
    let noteTextarea = $('#note-textarea'),
        instructions = $('#recording-instructions'),
        notesList = $('div#notes'),
        noteContent = '';

    recreateNode = async (e, d) => {
        if (d) e.parentNode.replaceChild(e.cloneNode(!0), e);
        else {
            for (var l = e.cloneNode(!1); e.hasChildNodes(); ) l.appendChild(e.firstChild);
            e.parentNode.replaceChild(l, e);
        }
    };
    checkSave_Del_list = async () => {
        if (await asyncLocalStorage.getItem('delete-list') == null||await asyncLocalStorage.getItem('save-list') == null) {
            await asyncLocalStorage.setItem('delete-list', JSON.stringify([]));
            await asyncLocalStorage.setItem('save-list', JSON.stringify([]));
        }
        let del_arr = JSON.parse(await asyncLocalStorage.getItem('delete-list'));
        del_arr.length > -1 ? (await ping() ? (await saveToServer(), await asyncLocalStorage.setItem('delete-list', JSON.stringify([]))):""):"";

        let save_arr = JSON.parse(await asyncLocalStorage.getItem('save-list'));
        save_arr.length > -1 ? (await ping() ? (await saveToServer(), await asyncLocalStorage.setItem('save-list', JSON.stringify([]))):""):"";
    };

    /*Char Count*/
    document.querySelector('.char-counter').addEventListener('keyup', () => {

        let characterCount = $('.char-counter').val().length,
            current = $('#current'),
            maximum = $('#maximum'),
            theCount = $('#the-count');

        current.text(characterCount);


        /*This isn't entirely necessary, just playin around*/
        characterCount < 70 && current.css("color", "#666"),
        characterCount > 70 && characterCount < 90 && current.css("color", "#6d5555"),
        characterCount > 90 && characterCount < 200 && current.css("color", "#793535"),
        characterCount > 100 && characterCount < 520 && current.css("color", "#841c1c"),
        characterCount > 120 && characterCount < 700 && current.css("color", "#8f0001"),
        characterCount >= 140 ? (maximum.css("color", "#8f0001"), current.css("color", "#8f0001"),
        theCount.css("font-weight", "bold")) : (maximum.css("color", "#666"),
        theCount.css("font-weight", "normal"));


    });

    /*----------------------------
            Read More
    ------------------------------*/
    function showReadMore() {
        var maxLength = 200;
        $(".show-read-more").each(function () {
            var myStr = $(this).html();
            if ($.trim(myStr).length > maxLength) {
                var newStr = myStr.substring(0, maxLength);
                var removedStr = myStr.substring(maxLength, $.trim(myStr).length);
                $(this).empty().html(newStr);
                $(this).append('<a href="javascript:void(0);" class="read-more link">More</a>');
                $(this).append('<span class="more-text">' + removedStr + '</span>');
            }
        });
        $(".read-more").click(function () {
            $(this).siblings(".more-text").contents().unwrap();
            $(this).remove();
        });
    }
    var ajax = {};
    ajax.x = function () {
        if (typeof XMLHttpRequest !== 'undefined') {
            return new XMLHttpRequest();
        }
        var versions = [
            "MSXML2.XmlHttp.6.0",
            "MSXML2.XmlHttp.5.0",
            "MSXML2.XmlHttp.4.0",
            "MSXML2.XmlHttp.3.0",
            "MSXML2.XmlHttp.2.0",
            "Microsoft.XmlHttp"
        ];
        var xhr;
        for (var i = 0; i < versions.length; i++) {
            try {
                xhr = new ActiveXObject(versions[i]);
                break;
            } catch (e) {
            }
        }
        return xhr;
    };
    ajax.send = function (d) {
        if (d.async === undefined) {
            d.async = !0;
        }
        var x = ajax.x();
        x.open(d.method, d.url, d.async);
        x.onreadystatechange = function () {
            if (x.readyState === 4) {
                callback(x.response)
            }
        };
        if (d.method === 'POST') {
            x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        }
        x.send(d.data)
    };
    ajax.get = function (d) {
        var query = [];
        for (var key in d.data) {
            query.push(encodeURIComponent(key) + '=' + encodeURIComponent(d.data[key]));
        }
        ajax.send(d.url + (query.length ? '?' + query.join('&') : ''), d.callback, 'GET', null, d.async)
    };
    ajax.post = function (d) {
        var query = [];
        for (var key in d.data) {
            query.push(encodeURIComponent(key) + '=' + encodeURIComponent(d.data[key]));
        }
        ajax.send(d.url, d.callback, 'POST', query.join('&'), d.async)
    };
    /*-----------------------------
    ajax.get({
        url : 'https://hosted-kabeersnetwork.000webhostapp.com/notes/server/alternate/getnotes.php?user_id=123456',
        async : true,
        callback : function (a) {
            console.log(a)
        }
    });
    */

    /*-----------------------------
          Voice Recognition
    ------------------------------*/

// If false, the recording will stop after a few seconds of silence.
// When true, the silence period is longer (about 15 seconds),
// allowing us to keep recording even when the user pauses.
    recognition.continuous = true;

// This block is called every time the Speech APi captures a line.
    recognition.onresult = (event) => {

        // event is a SpeechRecognitionEvent object.
        // It holds all the lines we have captured so far.
        // We only need the current one.
        // Get a transcript of what was said.
        let current = event.resultIndex, transcript = event.results[current][0].transcript;
        // Add the current transcript to the contents of our Note.
        // There is a weird bug on mobile, where everything is repeated twice.
        // There is no official solution so far so we have to handle an edge case.
        let mobileRepeatBug = (current === 1 && transcript === event.results[0][0].transcript);
        !mobileRepeatBug ? (noteContent += transcript, noteTextarea.val(noteContent)):"";
    };

    recognition.onstart = async () => {
        instructions.text('Voice recognition activated. Try speaking into the microphone.');
    };

    recognition.onspeechend = async () => {
        $('#start-record-btn').html('mic');
        instructions.text('You were quiet for a while so voice recognition turned itself off.');
    };

    recognition.onerror = async (event) => {
        if (event.error === 'no-speech') {
            instructions.text('No speech was detected. Try again.');
        }
    };


    /*-----------------------------
          App buttons and input
    ------------------------------*/
    let r_btn = $("#start-record-btn");
    r_btn.on('click', function () {
        noteContent.length ? noteContent += ' ' : "";
        r_btn.html('mic_off').attr('onclick', 'stopRecogBTNK()');
        recognition.start();
        Snackbar({message:`Recording Started`});

    });

    const stopRecogBTNK = () => {
        r_btn.html('mic').removeAttr('onclick');
        recognition.stop();
    };

    $('#pause-record-btn').on('click', () => {
        recognition.stop();
        instructions.text('Voice recognition paused.');
        r_btn.html('mic');
    });
    function isNullOrEmpty(str){
        return !str||!str.trim();
    }
// Sync the text inside the text area with the noteContent variable.
    noteTextarea.on('input', function (){
        noteContent = $(this).val();
    });

    $('#save-note-btn').on('click', () => {
        recognition.stop();
        if (!noteContent.length||isNullOrEmpty(noteContent.toString())) {
            instructions.text('Could not save empty note. Please add a message to your note.');
        } else {
            function escapeHtml_Render(text) {
                var map = {
                    '\n': ' '
                };
                return text.replace(/\n/g, async (m) => {
                    return map[m];
                });
            }

            // Save note to localStorage.
            // The key is the dateTime with seconds, the value is the content of the note.
            let noteContentJSON = {
                content: noteContent,
                uniqid: uniqid()
            };
            let date = new Date().toLocaleString();
            saveNote(date, escapeHtml_Render(JSON.stringify(noteContentJSON)));

            // Reset variables and update UI.
            noteContent = '';
            noteTextarea.val('');
            instructions.text('Note saved successfully.');
            Snackbar({message: "Note Saved!", actiontext: "Undo"}, async () => {
                deleteFromServer(date, user_id, noteContentJSON.uniqid);
                let savelist = JSON.parse(localStorage.getItem('save-list')), i = 0;
                for (i = savelist.length - 1; i >= 0; i--){
                    if (savelist[i].uniqid === noteContentJSON.uniqid) {
                        savelist.splice(i, 1);
                        break;
                    }
                }
                await asyncLocalStorage.setItem('save-list', JSON.stringify(savelist));
            });
        }

    });


    notesList.on('click',  (e) => {
        e.preventDefault();
        const target = $(e.target);
        // Listen to the selected note.
        if (target.hasClass('listen-note')) {
            const content = target.closest('.note').find('.note-Content').text();
            $(target).addClass('btn-disabled');
            readOutLoud(content, () => {
                $('.listen-note').removeClass('btn-disabled')
            });
        }

        /*  // Delete note.
          if(target.hasClass('delete-note')) {
            var dateTime = target.siblings('.date').text();
            deleteNote(dateTime);
            target.closest('.note').remove();
          }
         */
    });

    /* Snackbar Function Start */

    let Snackbar = (data, callback) => {
        !data.time ? data.time = 4000 : "";
        let div = document.createElement("DIV"), fab = document.querySelector('.k_fab');
        div.className = "snackbar";
        div.innerHTML = '<div class="content"><div class="msg">' + data.message + "</div></div></div>";
        if (data.actiontext) {
            let btn = document.createElement("DIV");
            btn.className = "action";
            btn.innerText = data.actiontext;
            btn.addEventListener("click", callback);
            div.querySelector(".content").appendChild(btn);
        }
        fab.classList.add('k-slide-down');
        document.body.appendChild(div);

        div.offsetTop;
        div.classList.add("show");
        setTimeout(() => {
            document.addEventListener("click", (e) => {
                if (e.target !== div && !div.contains(e.target)) {
                    close()
                }
            })
        });
        setTimeout(() => {
            close()
        }, data.time);

        const close = () => {
            div.classList.remove("show");
            div.addEventListener("transitionend", () => {
                div.remove();fab.classList.remove('k-slide-down');
            });
        }
    };

    const urlify = (text) => {
        let urlRegex = /(https?:\/\/[^\s]+)/g;
        return text.replace(urlRegex, function (url) {
            return '<a href="' + url + '">' + url + '</a>';
        })
    };

    /* Snackbar Function End */

    /* How to use?
    Snackbar({messange: "Snackbar message", actiontext: 'Button Text'}, CallbackFunction)

    document.querySelector(".one").addEventListener("click", () => {
      Snackbar({ message: "Hello! I am a Simple & Plain Snackbar!"});
      });


    document.querySelector(".two").addEventListener("click", () => {
      Snackbar({ message: "Hello! I am a Snackbar with Action Button!", actiontext: "Open" }, () => {
        alert("Snackbar Action Button Clicked");
      });
    });
    */
    const contentEditableSaveHelper = async (e) => {
        if ((e.key === 's' || e.key === 'S') && (e.ctrlKey || e.metaKey)) {
            $(this).html(unescape($(this).html()));
            let target = $(e.target);
            let noteContent = target.closest('.note').find('.note-Content').text().substring(0, 1600);
            let date = target.closest('.note').find('.date').text();
            let id = target.closest('.note').find('.id').text();
            let data = {noteContent: noteContent, date: date, id: id}
            contentEditable(data);
            e.preventDefault();
            addEventListener_OnKeyDown();
        }
    };

    const addEventListener_OnKeyDown = async  () => {
        $(".note-Content").on('keydown', function (e) {
            contentEditableSaveHelper(e);
        });
    };
    addEventListener_OnKeyDown();

    /*-----------------------------
          Speech Synthesis
    ------------------------------*/

    const readOutLoud = (message, callback) => {
        console.log(speechSynthesis.getVoices())
        let speech = new SpeechSynthesisUtterance();

        // Set the text and voice attributes.
        speech.text = message;
        speech.volume = 1;
        speech.rate = 0.8;
        speech.pitch = 1;

        window.speechSynthesis.speak(speech);
        speech.onend = callback()
    };

    const replaceAll = (string, search, replace) => {
        return string.split(search).join(replace);
    };
    /*-----------------------------
          Helper Functions
    ------------------------------*/
    const escapeHtml = (text) =>{
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, function (m) {
            return map[m];
        });
    };

    let contentEditableSaveHelperEle = async (e) => {
        $(e).text($(e).text());
        let target = $(e),
            noteContent = target.closest('.note').find('.note-Content').text(),
            date = target.closest('.note').find('.date').text(),
            id = target.closest('.note').find('.id').text(),
            data = {noteContent: noteContent, date: date, id: id};
        if(!noteContent.length||isNullOrEmpty(noteContent.toString())){
            Snackbar({message:"Empty note deleted"});
        }else {
            contentEditable(data);
            Snackbar({message: "Note Saved!"});
        }
        addEventListener_OnKeyDown();
    };
    const renderNotes = (notes) => {
        const escapeHTML_r = (unsafe) => {
            return unsafe
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;");
        };
        let html = '';
        if (notes.length) {
            for (let i = 0; i < notes.length; i++){
                let note = notes[i], heading = note.content.split('\n')[0]; // lines is an array of strings
                note.content = note.content.substring(heading.length);
                html += `<div class="col-md-6 mt-3 note pt-2 ${note.uniqid}">
            <div class=" card border h-100 w-100">
            <p class="header d-flex p-3" style="justify-content:space-around">
                <span class="d-none id">${note.uniqid}</span>
                <span class="date">${note.date}</span>
                <a href="#" class="listen-note material-icons" title="Listen to Note">volume_up</a>
                <a onclick="deleteFromServer('${note.date}','${user_id}', '${note.uniqid}')" href="#" class="delete-note material-icons" title="Delete">delete</a>
            </p>
            <span class="note-Content p-4" onclick="this.contentEditable=true;$(this).closest('h3').remove()" onblur="this.contentEditable=false;contentEditableSaveHelperEle(this);" contenteditable="false">
            <h3>${heading}</h3><div class="pb-2"><p class="-show-read-more" style="word-wrap: break-word; white-space: pre-wrap;">${urlify(escapeHTML_r(note.content))}</p></div></span></div></div>`;
            }
        } else {
            html = `<div class="col-md-12 d-flex justify-content-center">
              <img src="assets/icons/ic_launcher.png" style="width: 10rem;height: auto;opacity:100%"></div>
            <div class="col-md-12"><p class="text-center text-muted">Notes you add appear here</p></div>
            </div></div>`;
        }
        notesList.html(html);
    };
    const contentEditable = async (data) => {
        let noteContentJSON = {
            content: data.noteContent,
            uniqid: uniqid()
        };
        await deleteFromServer(data.date, user_id, data.id);
        saveNote(data.date, JSON.stringify(noteContentJSON));
    };
    const saveNote = async (dateTime, content) => {
        asyncLocalStorage.setItem('note-' + dateTime, content).then(function () {
            ping() ? sync_now(false) : sync_now();
            getFromServer(user_id, renderNotes);
        });
    };
    const deleteNote = (dateTime) => {
        localStorage.removeItem('note-' + dateTime);
    };
    const refresh = async () => {
        await getFromServer(user_id, renderNotes);
        checkSave_Del_list();
        Snackbar({message: 'Refreshed!'});
    };
    /*Util Functions*/
    Array.prototype.inArray = function(comparer) {
        for(let i=0; i < this.length; i++) {
            if(comparer(this[i])) return true;
        }
        return false;
    };
    Array.prototype.pushIfNotExist = function(element, comparer) {
        if (!this.inArray(comparer)) {
            this.push(element);
        }
    };
function Utils() {}

    Utils.prototype = {
        constructor: Utils,
        isElementInView: function (element, fullyInView) {
            let pageTop = $(window).scrollTop(), pageBottom = pageTop + $(window).height() , elementTop = $(element).offset().top, elementBottom = elementTop + $(element).height();
            if (fullyInView === true) {
                return ((pageTop < elementTop) && (pageBottom > elementBottom));
            } else {
                return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
            }
        }
    };
    Utils = new Utils();

    let uniqid = (a = "", b = false) => {
        const c = Date.now() / 1000;
        let d = c.toString(16).split(".").join("");
        while (d.length < 14) d += "0";
        let e = "";
        if (b) {
            e = ".";
            e += Math.round(Math.random() * 100000000);
        }
        return a + d + e;
    };

    /*Server Functions*/
    const saveToServer = async () => {
        function escapeH_S(unsafe) {
            return unsafe
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/\\/g, "&#92;")
                .replace(/'/g, "&#039;");
        }
        let ajaxSave = async (data) => {
            if (!await ping() || !navigator.onLine){
                let save_arr = await JSON.parse(await localStorage.getItem('save-list')),
                    index = save_arr.findIndex(m => m.uniqid === data.uniqid);
                if (index !== -1 || save_arr.length > -1){
                    save_arr.push({
                        date: data.date,
                        user_id: data.user_id,
                        content: data.content,
                        uniqid: data.uniqid,
                    });
                }
                await localStorage.setItem('save-list', JSON.stringify(save_arr));
            }
            $.ajax({
                url: "https://hosted-kabeersnetwork.000webhostapp.com/notes/server/alternate/savetoserver.php",
                type: 'POST',
                dataType: "json",
                data: {
                    date: data.date,
                    user_id: data.user_id,
                    content: btoa(encodeURIComponent(escapeH_S(data.content))),
                    uniqid: data.uniqid
                },
                async: true,
                success: function () {
                    console.log('Saved Notes to The Server');
                },
            });
        };
        let key = undefined, i = 0;
        for (i = localStorage.length - 1; i >= 0; i--){
            key = await localStorage.key(i);
            if (key.substring(0, 5) === 'note-') {
                const main = await JSON.parse(await localStorage.getItem(await localStorage.key(i)));
                let data = {
                    date: key.replace('note-', ''),
                    user_id: user_id,
                    content: main.content,
                    uniqid: main.uniqid,
                };
                await ajaxSave(data);
            }
        }
    };
    let getFromServer = async (user_id , callback = renderNotes) => {
        let notes = [];
        const ajaxGetNotes = async () => {
            await $.ajax({
                url: "https://hosted-kabeersnetwork.000webhostapp.com/notes/server/alternate/getnotes.php?user_id=" + user_id,
                type: 'GET',
                async: true,
                success:function(jqXHR){
                    let i;
                    for (i = 0; i < jqXHR.length; i++) {
                        notes.push({
                            date: jqXHR[i].date,
                            content: jqXHR[i].content,
                            uniqid: jqXHR[i].uniqid,
                        })
                    }
                }
            });
            return notes;
        };
        !await ping() ? (callback(await getNotesFromLocalStorage()), console.warn('Cannot Fetch No Connection')) : (callback(await ajaxGetNotes()));
    };
    let deleteFromServer = async (datetime, user_id = user_id, note_id) => {
        if (!await ping()) {
            let del_arr = JSON.parse(localStorage.getItem('delete-list'));
            del_arr.push({
                note_id: note_id,
                date: datetime
            });
            await asyncLocalStorage.setItem('delete-list', JSON.stringify(del_arr));
        }
        let ajaxDelete = async (data) => {
            $.ajax({
                url: "https://hosted-kabeersnetwork.000webhostapp.com/notes/server/alternate/delete.php?user_id=" + data.user_id + "&uniqid=" + data.uniqid,
                type: 'GET',
                async: true,
                success: () => {
                    console.log('Deleted Note From The Server');
                }
            });
        };
        if (await ping()){
            await ajaxDelete({
                user_id: user_id,
                uniqid: note_id
            });
        }else {
            console.warn('Cannot Delete No Connection!')
        }
        deleteNote(datetime);
        $('.' + note_id).remove();
        Snackbar({message: "Deleted!"});
    };
    let sync_now = async (ms = true) => {
        await checkSave_Del_list();
        if (await ping()) {
            if (ms) {
                Snackbar({message: 'Synced!'});
            }else {}
        } else {
            if (ms) {
                Snackbar({message: "Sync Failed, No Connection!", actiontext: "Retry"}, () => {
                    sync_now();
                });
            } else {}
        }
        await saveToServer();
    };
    const getNotesFromLocalStorage = () => {
        const escapeHTML_GET = (text) => {
            const map = {
                '<': '&lt;',
                '>': '&gt;',
            };
            return text.replace(/[<>]/g, function (m) {
                return map[m];
            });
        };
        let key = undefined, notes = [];
        for (let i = localStorage.length - 1; i >= 0; i--) {
            key = localStorage.key(i);
            if (key.substring(0, 5) === 'note-') {
                notes.push({
                    date: key.replace('note-', ''),
                    content: JSON.parse(escapeHTML_GET(localStorage.getItem(localStorage.key(i)))).content,
                    uniqid: JSON.parse(escapeHTML_GET(localStorage.getItem(localStorage.key(i)))).uniqid
                });
            }
        }
        return notes;
    };
    const dE = async () => {
        localStorage.clear();
        $.ajax({
            url: "http://hosted-kabeersnetwork.000webhostapp.com/notes/server/alternate/del_all.php?user_id=" + user_id,
            type: 'GET',
            async: true,
            success: function () {
                console.log('Deleted Account');
            }
        });
    };
    const saveToDeviceFromServerHelper = (p) => {
        saveToDeviceFromServer(p, getNotesFromLocalStorage());
    };
    let saveToDeviceFromServer = async (server, local) => {
        function arr_diff(a1, a2) {
            return a1.filter(x => !a2.includes(x));
        }
        let items = arr_diff(server, local);
        if (items.length > -1) {
            for (let i = items.length - 1; i >= 0; i--) {
                let noteContentJSON = {
                    content: items[i].content,
                    uniqid: items[i].uniqid
                };
                await saveNote(items[i].date, JSON.stringify(noteContentJSON));
            }
        }
    };
//SYNC Each Hour
    let dayInMilliseconds = 1000 * 60 * 60 * 0.5;
    setInterval(function () {
        sync_now();
        getFromServer(user_id, saveToDeviceFromServerHelper)
    }, dayInMilliseconds);
    /*Style Functions*/
    function focusTextarea() {
        $('#note-textarea').focus();
    }
    $('.year').html(new Date().getFullYear());
    function timer_k(e){
        let output = document.querySelector(e);
        let ms = 0;
        let sec = 0;
        let min = 0;
        timer = () => {
            ms++;
            if(ms >= 100){
                sec++
                ms = 0
            }
            if(sec === 60){
                min++
                sec = 0
            }
            if(min === 60){
                ms, sec, min = 0;
            }
            //Doing some string interpolation
            let milli = ms < 10 ? `0`+ ms : ms;
            let seconds = sec < 10 ? `0`+ sec : sec;
            let minute = min < 10 ? `0` + min : min;

            let timer= `${minute}:${seconds}:${milli}`;
            output.innerHTML =timer;
        };
    //Start timer
        start_timer = () => {
            time = setInterval(timer,10);
        };
    //reset timer
        reset_timer = () =>{
            ms = 0;
            sec = 0;
            min = 0;
        };

    }

    /*Testing Calls*/

    /*        $.ajax({
                url: "https://hosted-kabeersnetwork.000webhostapp.com/notes/server/alternate/getnotes.php?user_id=" +user_id,
                type: 'GET',
                async: true,
            }).then((val)=>console.log(val));


    https://hosted-kabeersnetwork.000webhostapp.com/tinyFileManager.php?p=notes%2F12
    https://filemanager.ai/new/#
    https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Offline_Service_workers
    https://material.io/resources/icons/?search=new&style=baseline
    http://jsfiddle.net/zVu8R/
    http://auth.kabeersnetwork.rf.gd/js-sdk/
    https://codepen.io/dagalti/pen/BELagK
    https://www.webqc.org/balance.php
    https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/
    http://185.27.134.10/sql.php?db=epiz_26104846_auth&table=clients&pos=0
    https://pk.godaddy.com/community/GoDaddy-Web-Hosting/Spring-Boot-hosting/td-p/54316
    */
// $('.mdc-drawer').addClass('mdc-drawer--closing')

    //    saveToDeviceFromServer(getFromServer(user_id), getNotesFromLocalStorage())

    getFromServer(user_id, renderNotes).then(()=>{
        $('#preloader').remove();
    });
    //saveToDeviceFromServer(getFromServer(user_id), getNotesFromLocalStorage())
    //sync_now();
    //render_helper()
    //getAllNotes(renderNotes).then();
