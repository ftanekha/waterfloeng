'use strict';

const slideshow = new GLSlideshow(
	[ './pics/chilling.jpg', './pics/engineers.jpg', './pics/pipe.jpg', './pics/tank.jpg', './pics/valve.jpg' ],
	{
		canvas: document.getElementById('myCanvas'), // optional
		width: 100%,        // optional
		height: 75%,        // optional
		duration: 1000,     // optional
		interval: 5000,     // optional
		effect: 'wind' // optional [wind, cube, ripple, crossFade, pageCurls, directionalWipe]
	}
);

document.getElementById( 'ourProductsSlideShow' ).appendChild( slideshow.domElement );
