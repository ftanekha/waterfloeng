(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"./surfaceIrrigationConstructionPics":2}],2:[function(require,module,exports){
let surfaceIrrigationConstructionPics = [
    './pics/surface irrigation construction/text.jpg',
    './pics/surface irrigation construction/1.jpg',
    './pics/surface irrigation construction/2.jfif',
    './pics/surface irrigation construction/3.jfif',
    './pics/surface irrigation construction/4.jfif',
    './pics/surface irrigation construction/5.jfif',
    './pics/surface irrigation construction/6.jfif',
    './pics/surface irrigation construction/7.jfif',
    './pics/surface irrigation construction/8.jfif',
    './pics/surface irrigation construction/9.jfif',
    './pics/surface irrigation construction/10.jfif',
    './pics/surface irrigation construction/11.jfif',
    './pics/surface irrigation construction/12.jfif',
    './pics/surface irrigation construction/13.jfif',
    './pics/surface irrigation construction/14.jfif',
]

module.exports = surfaceIrrigationConstructionPics;
},{}]},{},[1]);
