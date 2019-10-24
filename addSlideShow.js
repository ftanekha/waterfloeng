'use strict';

let GLSlideshow = require('./glSlideShow');

//requires an array of photos as an argument
function addSlideShow(projectId){
    //switch from menu list
    document.getElementById('ourProjectsHeading').style.display = 'none';

    //display canvas(initially set to 'none')
    document.getElementById('myCanvas').style.display = 'block';

    //initiate slide show
	const slideshow = new GLSlideshow(
        //**********the array of stored pics, ref: ./surfaceIrrigationConstructionPics.js
		[ ...`${projectId}Pics` ],
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
}

module.exports = addSlideShow;