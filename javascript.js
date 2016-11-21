// CV SLIDER

var sliderIndex = 1;		
	moveslider(sliderIndex);

function leftrightslider(n) {
	moveslider(sliderIndex += n);		
}

function moveslider(n) {
	var x = document.getElementsByClassName("cv_slides");
	if (sliderIndex  > x.length) {sliderIndex = 1};		
	if (sliderIndex  < 1) {sliderIndex = x.length};		
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";			
	}
	x[sliderIndex-1].style.display = "block";		
}

// SMOOTH SCROLLING - Pure Javascript - Source: http://web.archive.org/web/20140103045600/http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript 

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
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 10) {
        scrollTo(0, stopY); return;
    }
    var speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
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
