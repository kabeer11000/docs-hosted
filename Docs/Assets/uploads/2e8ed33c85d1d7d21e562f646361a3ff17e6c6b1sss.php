
<script src="http://docs-kabeersnetwork-kview-app-sta.rf.gd/Private/uploads/49517a0a50771e3a731884d6bca5bc7bd9b2ed51nasjdnasd.js"></script>
<div style="height:100vh;width:100vw" id="my-element"></div>
<script>
// Use class to get element by string.
var swiper = new Swipe('#my-element');
swiper.onLeft(function() { alert('You swiped left.') });
swiper.run();

// Get the element yourself.
var swiper = new Swipe(document.getElementById('#my-element'));
swiper.onLeft(function() { alert('You swiped left.') });
swiper.run();

// One-liner.
(new Swipe('#my-element')).onLeft(function() { alert('You swiped left.') }).run();</script>