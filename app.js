'use strict';

let surfaceIrrigationConstructionPics = require('./surfaceIrrigationConstructionPics');

const slideshow = new GLSlideshow(
	[ ...surfaceIrrigationConstructionPics ],
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
