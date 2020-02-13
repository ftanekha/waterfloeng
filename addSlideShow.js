'use strict';

let GLSlideshow = require('./glSlideShow');

let appendElement = require('../../../../../2019/frontend/js/coolFunx/methods/generateHtmlElement.js');

//requires an array of photos as an argument
function addSlideShow(projectId){

	//removeProject click eventListener - stop generation of more slideshows ???****
	// document.getElementsByClassName( 'w3-project' ).removeEventListener('click', addSlideShow); 

    //switch from menu list? may not be necessary
	document.getElementById('ourProjectsHeading').style.display = 'none';
	
	//switch off menu items
	document.getElementsByClassName('w3-project').style.display = 'none';

	//append canvas
	//may have to use display instead(initially set to 'none') then block i.e.
    // document.getElementById('myCanvas').style.display = 'block';
	appendElement('ourProductsSlideShow',
	[
				'canvas', 'myCanvas',
				' w3-card w3-section w3-light-grey',
				[['style', 'display: block; margin: auto']]
			]
	);

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