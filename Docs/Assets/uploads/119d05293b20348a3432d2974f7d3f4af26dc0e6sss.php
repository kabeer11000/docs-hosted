<html><head>
    <style>
        textarea {
   resize: none; 
   width: 50%;
   height: 50px; 
   margin: 1rem auto;
}
    </style>
</head>
<body>
    <textarea>I am a student and I want to become a good person</textarea>
    <script type="text/javascript">
        var mySelection = function (element) {
    let startPos = element.selectionStart;
    let endPos = element.selectionEnd;
    let selectedText = element.value.substring(startPos, endPos);

    if(selectedText.length <= 0) {
      return; // stop here if selection length is <= 0
    }
    
    // log the selection
    console.log("startPos: " + startPos, " | endPos: " + endPos );
    console.log("selectedText: " +  selectedText);

  };

var textAreaElements = document.querySelectorAll('textarea');
[...textAreaElements].forEach(function(element) {
    // register "mouseup" event for the mouse
    element.addEventListener('mouseup', function(){
        mySelection(element)
    });
    
    // register "keyup" event for the keyboard
    element.addEventListener('keyup', function( event ) {
        // assuming we need CTRL, SHIFT or CMD key to select text
        // only listen for those keyup events
        if(event.keyCode == 16 || event.keyCode == 17 || event.metaKey) {
            mySelection(element)
        }
    });
});
    </script>
