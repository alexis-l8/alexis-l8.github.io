// CV SLIDER

var sliderIndex = 1;		
	moveslider(sliderIndex);		// initiates the function

function leftrightslider(n) {
	moveslider(sliderIndex += n);		// reacts to left and right press of slider buttons
}

function moveslider(n) {
	var x = document.getElementsByClassName("cv_slides");
	if (sliderIndex  > x.length) {sliderIndex = 1};		// starts from beginning if exceeds length
	if (sliderIndex  < 1) {sliderIndex = x.length};		// starts from end if goes below 1
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";			// hides all images immediately and every time
	}
	x[sliderIndex-1].style.display = "block";		// shows the image according to sliderIndex
}

// SMOOTH SCROLLING - Pure Javascript - Credit: http://web.archive.org/web/20140103045600/http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript 

function currentYPosition() {
    if (window.pageYOffset) return window.pageYOffset; // pageXOffset and pageYOffset properties returns the pixels the current document has been scrolled from the upper left corner of the window, horizontally and vertically
}

function elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    } return y;
}

function smoothScroll(eID) {
    var startY = currentYPosition();
    var stopY = elmYPosition(eID);
    var distance = stopY > startY ? stopY - startY : startY - stopY;	// option for bi-directional scrolling
    if (distance < 10) {
        scrollTo(0, stopY); return;					// does not scroll if too close
    }
    var speed = Math.round(distance / 100);			// speed if faster is destination is further away
    if (speed >= 20) speed = 20;					
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;	// increments to leap after every delay
    var timer = 0;
    if (stopY > startY) {
        for ( var i=startY; i<stopY; i+=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
    }
    for ( var i=startY; i>stopY; i-=step ) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
}
