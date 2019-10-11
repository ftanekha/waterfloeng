'use strict';

const slideshow = new GLSlideshow(
	[ './pics/chilling.jpg', './pics/engineers.jpg', './pics/pipe.jpg', './pics/tank.jpg', './pics/valve.jpg' ],
	{
		canvas: document.getElementById('myCanvas'), // optional
		width: 300,      // optional
		height: 225,        // optional
		duration: 1000,     // optional
		interval: 5000,     // optional
		effect: 'wind' // optional [wind, ripple: work] [crossFade, pageCurls, cube, directionalWipe: don't work]
	}
);

document.getElementById( 'ourProductsSlideShow' ).appendChild( slideshow.domElement );
