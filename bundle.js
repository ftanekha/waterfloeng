(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

//generate html element with any number of atttributes:

function generateElement(tag, id, clas, attr){
    let el = document.createElement(tag);
    el.id = id !== undefined ? id : '';
    el.className += clas !== undefined ? clas : '';
    if(attr && attr !== undefined) for(let att of attr) el.setAttribute(att[0], att[1]);

    return el;
}

//append the element to the DOM using the Id attribute of the targeted parent element;
//elementDetails = array[tagName, id, classname, [ [attribute, value], [attrbute, value]....]
function appendElement(parentId, elementDetails){
    let parentNode = document.getElementById(parentId);
    if(elementDetails !== undefined && typeof elementDetails === 'object') parentNode.append(generateElement(...elementDetails));
}

module.exports = appendElement;

//example:

// appendElement(
//     'main',['p', 'para', 'w3-section w3-dark-grey', [['style', 'font-weight: bolder'], ['title', 'hi world']] ] 
//     );

// let text = document.getElementById('para');
// text.innerText = 'hi world';


//***********************************************************

// binding a function reduces repetition:
// let sender1 = {
//     name: 'one', sayHi(){ return 'Hi world :)'}

// }

// let sender2 = {
//     name: 'two', inbox: [],

// }

// let sender3 = {
//     name: 'three', inbox: [],

// }

// function sendText(from, text, to){
//     to.inbox.push(text());
// }

// let msg = sendText.bind(null, sender1.name, sender1.sayHi)
// ;
// msg(sender2);
// log(sender2.inbox[0])

// msg(sender3);
// log(sender3.inbox[0])


},{}],2:[function(require,module,exports){
'use strict';

let popularProducts = require('./popularProducts');
// let appendElement = require('../../js/coolFunx/methods/generateHtmlElement.js');

function addPopularProducts(){
    for(let product of popularProducts){
        let listItem = document.createElement('li');
        listItem.className += ' w3-padding-16 w3-section';

        let listItemImageContainer = document.createElement('div');
        listItemImageContainer.style.clear = 'both';
        listItemImageContainer.className += ' w3-section';

        let listItemImage = document.createElement('img');
        listItemImage.src = product.src; 
        listItemImage.alt = product.alt;
        listItemImage.title = product.alt; 
        listItemImage.className += ' w3-card w3-left w3-margin-right w3-margin-bottom';

        let listItemLabel = document.createElement('span');
        listItemLabel.className += 'w3-justify';
        listItemLabel.innerText = product.label;

        listItemImageContainer.append(listItemImage);
        listItemImageContainer.append(listItemLabel);

        listItem.append(listItemImageContainer);
        
        document.getElementById('popularItems').append(listItem);
    }
}

module.exports = addPopularProducts;
},{"./popularProducts":7}],3:[function(require,module,exports){
'use strict';

let GLSlideshow = require('./glSlideShow');

let appendElement = require('../../js/coolFunx/methods/generateHtmlElement.js');

//requires an array of photos as an argument
function addSlideShow(projectId){

	//removeProject click eventListener - stop generation of more slideshows ???
	document.getElementsByClassName( 'w3-project' ).removeEventListener('click', addSlideShow); 

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
},{"../../js/coolFunx/methods/generateHtmlElement.js":1,"./glSlideShow":6}],4:[function(require,module,exports){
'use strict';

let appendElement = require('../../js/coolFunx/methods/generateHtmlElement.js');

let tags = [
    'alluminium pipes & fittings',  
    'cast iron & brass gate valves', 
    'hydromatic valves',  
    'tanks',
    'horses',  
    'solar panels',  
    'portable & fixed base pump sets', 
    'brass & plastic sprinklers', 
    'heavy duty priming pumps',  
    'sluice gates', 
]

function addTags (){
    //create a p tag to wrap around the tags
    appendElement('tagsContainer', 
    [
        'p', 'tags', ' w3-text-black',
        []
    ])

    //append the tags
    for(let tag of tags){
        appendElement('tags', 
    [
            'span', `tag_${tag}`, ' w3-tag w3-light-grey w3-small w3-margin-bottom',
            []
        ]);

        document.getElementById(`tag_${tag}`).innerText = tag;
    }
}


module.exports = addTags;
},{"../../js/coolFunx/methods/generateHtmlElement.js":1}],5:[function(require,module,exports){
'use strict';

let projectList = require('./projectList');
let projectSlideShow = require('./projectSlideShow');
let popularItems = require('./addPopularProducts');
let tags = require('./addTags');
// let subscribeButton = require('./subscribeButton');
let subscribeButton = require('./subscribe');

//display project menu
function displayProjectMenu(){
    //hide heading
    document.getElementById('ourProjectsHeading').style.display = 'none';

    // display menu
    projectList();

    //render slideShow onlick for each project
    projectSlideShow();
	
} 

let ourProductsSlideShow = document.getElementById('ourProductsSlideShow');
ourProductsSlideShow.addEventListener('click', displayProjectMenu);

//display popular products
popularItems();

//appendtags
tags();

//
subscribeButton();

},{"./addPopularProducts":2,"./addTags":4,"./projectList":9,"./projectSlideShow":10,"./subscribe":11}],6:[function(require,module,exports){
'use strict';

/*!
 * @author yomotsu
 * GLSlideshow
 * https://github.com/yomotsu/gl-slideshow
 * Released under the MIT License.
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.GLSlideshow = factory());
}(this, function () { 'use strict';

	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0

	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.

	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */
	/* global Reflect, Promise */

	var extendStatics = function(d, b) {
	    extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return extendStatics(d, b);
	};

	function __extends(d, b) {
	    extendStatics(d, b);
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}

	var EventDispatcher = (function () {
	    function EventDispatcher() {
	        this._listeners = {};
	    }
	    EventDispatcher.prototype.addEventListener = function (type, listener) {
	        var listeners = this._listeners;
	        if (listeners[type] === undefined)
	            listeners[type] = [];
	        if (listeners[type].indexOf(listener) === -1) {
	            listeners[type].push(listener);
	        }
	    };
	    EventDispatcher.prototype.hasEventListener = function (type, listener) {
	        var listeners = this._listeners;
	        return listeners[type] !== undefined && listeners[type].indexOf(listener) !== -1;
	    };
	    EventDispatcher.prototype.removeEventListener = function (type, listener) {
	        var listeners = this._listeners;
	        var listenerArray = listeners[type];
	        if (listenerArray !== undefined) {
	            var index = listenerArray.indexOf(listener);
	            if (index !== -1)
	                listenerArray.splice(index, 1);
	        }
	    };
	    EventDispatcher.prototype.dispatchEvent = function (event) {
	        var listeners = this._listeners;
	        var listenerArray = listeners[event.type];
	        if (listenerArray !== undefined) {
	            event.target = this;
	            var array = listenerArray.slice(0);
	            for (var i = 0, l = array.length; i < l; i++) {
	                array[i].call(this, event);
	            }
	        }
	    };
	    return EventDispatcher;
	}());

	function getWebglContext(canvas, contextAttributes) {
	    return (canvas.getContext('webgl', contextAttributes) ||
	        canvas.getContext('experimental-webgl', contextAttributes));
	}

	var defaultImage = document.createElement('canvas');
	defaultImage.width = 2;
	defaultImage.height = 2;
	var Texture = (function (_super) {
	    __extends(Texture, _super);
	    function Texture(image, gl) {
	        var _this = _super.call(this) || this;
	        _this.image = image;
	        _this.gl = gl;
	        _this.texture = gl.createTexture();
	        gl.bindTexture(gl.TEXTURE_2D, _this.texture);
	        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 255]));
	        _this.onload();
	        return _this;
	    }
	    Texture.prototype.isLoaded = function () {
	        return this.image.naturalWidth !== 0;
	    };
	    Texture.prototype.onload = function () {
	        var _this = this;
	        var onload = function () {
	            _this.image.removeEventListener('load', onload);
	            _this.setImage(_this.image);
	        };
	        if (this.isLoaded()) {
	            this.setImage(this.image);
	            return;
	        }
	        this.image.addEventListener('load', onload);
	    };
	    Texture.prototype.setImage = function (image) {
	        var _gl = this.gl;
	        var _image;
	        this.image = image;
	        if (this.isLoaded()) {
	            _image = this.image;
	        }
	        else {
	            _image = defaultImage;
	            this.onload();
	        }
	        if (!_gl) {
	            this.dispatchEvent({ type: 'updated' });
	            return;
	        }
	        _gl.bindTexture(_gl.TEXTURE_2D, this.texture);
	        _gl.pixelStorei(_gl.UNPACK_FLIP_Y_WEBGL, +true);
	        _gl.texParameteri(_gl.TEXTURE_2D, _gl.TEXTURE_MAG_FILTER, _gl.LINEAR);
	        _gl.texParameteri(_gl.TEXTURE_2D, _gl.TEXTURE_MIN_FILTER, _gl.LINEAR);
	        _gl.texParameteri(_gl.TEXTURE_2D, _gl.TEXTURE_WRAP_S, _gl.CLAMP_TO_EDGE);
	        _gl.texParameteri(_gl.TEXTURE_2D, _gl.TEXTURE_WRAP_T, _gl.CLAMP_TO_EDGE);
	        _gl.texImage2D(_gl.TEXTURE_2D, 0, _gl.RGBA, _gl.RGBA, _gl.UNSIGNED_BYTE, _image);
	        _gl.bindTexture(_gl.TEXTURE_2D, null);
	        this.dispatchEvent({ type: 'updated' });
	    };
	    return Texture;
	}(EventDispatcher));

	var VERTEX_SHADER_SOURCE = "\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUv;\nvoid main() {\n\tgl_Position = vec4( position, 1., 1. );\n\tvUv = uv;\n}\n";
	var FRAGMENT_SHADER_SOURCE_HEAD = "\nprecision highp float;\nvarying vec2 vUv;\nuniform float progress, ratio;\nuniform vec2 resolution;\nuniform sampler2D from, to;\nvec4 getFromColor( vec2 uv ) {\n\treturn texture2D(from, uv);\n}\nvec4 getToColor( vec2 uv ) {\n\treturn texture2D(to, uv);\n}\n";
	var FRAGMENT_SHADER_SOURCE_FOOT = "\nvoid main(){\n\tgl_FragColor = transition( vUv );\n}\n";
	var shaders = {
	    crossFade: {
	        uniforms: {},
	        source: "\nvec4 transition (vec2 uv) {\n\treturn mix( getFromColor(uv), getToColor(uv), progress );\n}"
	    },
	    crossZoom: {
	        uniforms: {
	            strength: 0.4,
	        },
	        source: "\n// License: MIT\n// Author: rectalogic\n// ported by gre from https://gist.github.com/rectalogic/b86b90161503a0023231\n\n// Converted from https://github.com/rectalogic/rendermix-basic-effects/blob/master/assets/com/rendermix/CrossZoom/CrossZoom.frag\n// Which is based on https://github.com/evanw/glfx.js/blob/master/src/filters/blur/zoomblur.js\n// With additional easing functions from https://github.com/rectalogic/rendermix-basic-effects/blob/master/assets/com/rendermix/Easing/Easing.glsllib\n\nuniform float strength; // = 0.4\n\nconst float PI = 3.141592653589793;\n\nfloat Linear_ease(in float begin, in float change, in float duration, in float time) {\n\treturn change * time / duration + begin;\n}\n\nfloat Exponential_easeInOut(in float begin, in float change, in float duration, in float time) {\n\tif (time == 0.0)\n\t\treturn begin;\n\telse if (time == duration)\n\t\treturn begin + change;\n\ttime = time / (duration / 2.0);\n\tif (time < 1.0)\n\t\treturn change / 2.0 * pow(2.0, 10.0 * (time - 1.0)) + begin;\n\treturn change / 2.0 * (-pow(2.0, -10.0 * (time - 1.0)) + 2.0) + begin;\n}\n\nfloat Sinusoidal_easeInOut(in float begin, in float change, in float duration, in float time) {\n\treturn -change / 2.0 * (cos(PI * time / duration) - 1.0) + begin;\n}\n\nfloat rand (vec2 co) {\n\treturn fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\nvec3 crossFade(in vec2 uv, in float dissolve) {\n\treturn mix(getFromColor(uv).rgb, getToColor(uv).rgb, dissolve);\n}\n\nvec4 transition(vec2 uv) {\n\tvec2 texCoord = uv.xy / vec2(1.0).xy;\n\n\t// Linear interpolate center across center half of the image\n\tvec2 center = vec2(Linear_ease(0.25, 0.5, 1.0, progress), 0.5);\n\tfloat dissolve = Exponential_easeInOut(0.0, 1.0, 1.0, progress);\n\n\t// Mirrored sinusoidal loop. 0->strength then strength->0\n\tfloat strength = Sinusoidal_easeInOut(0.0, strength, 0.5, progress);\n\n\tvec3 color = vec3(0.0);\n\tfloat total = 0.0;\n\tvec2 toCenter = center - texCoord;\n\n\t/* randomize the lookup values to hide the fixed number of samples */\n\tfloat offset = rand(uv);\n\n\tfor (float t = 0.0; t <= 40.0; t++) {\n\t\tfloat percent = (t + offset) / 40.0;\n\t\tfloat weight = 4.0 * (percent - percent * percent);\n\t\tcolor += crossFade(texCoord + toCenter * percent * strength, dissolve) * weight;\n\t\ttotal += weight;\n\t}\n\treturn vec4(color / total, 1.0);\n}\n"
	    },
	    directionalWipe: {
	        uniforms: {
	            direction: [1, -1],
	            smoothness: 0.4
	        },
	        source: "\n// Author: gre\n// License: MIT\n\nuniform vec2 direction; // = vec2(1.0, -1.0)\nuniform float smoothness; // = 0.5\n\nconst vec2 center = vec2(0.5, 0.5);\n\nvec4 transition (vec2 uv) {\n\tvec2 v = normalize(direction);\n\tv /= abs(v.x)+abs(v.y);\n\tfloat d = v.x * center.x + v.y * center.y;\n\tfloat m =\n\t\t(1.0-step(progress, 0.0)) * // there is something wrong with our formula that makes m not equals 0.0 with progress is 0.0\n\t\t(1.0 - smoothstep(-smoothness, 0.0, v.x * uv.x + v.y * uv.y - (d-0.5+progress*(1.+smoothness))));\n\treturn mix(getFromColor(uv), getToColor(uv), m);\n}\n"
	    },
	    wind: {
	        uniforms: {
	            size: 0.2,
	        },
	        source: "\n// Author: gre\n// License: MIT\n\n// Custom parameters\nuniform float size; // = 0.2\n\nfloat rand (vec2 co) {\n\treturn fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\nvec4 transition (vec2 uv) {\n\tfloat r = rand(vec2(0, uv.y));\n\tfloat m = smoothstep(0.0, -size, uv.x*(1.0-size) + size*r - (progress * (1.0 + size)));\n\treturn mix(\n\t\tgetFromColor(uv),\n\t\tgetToColor(uv),\n\t\tm\n\t);\n}\n"
	    },
	    ripple: {
	        uniforms: {
	            amplitude: 100,
	            speed: 50,
	        },
	        source: "\n// Author: gre\n// License: MIT\nuniform float amplitude; // = 100.0\nuniform float speed; // = 50.0\n\nvec4 transition (vec2 uv) {\n\tvec2 dir = uv - vec2(.5);\n\tfloat dist = length(dir);\n\tvec2 offset = dir * (sin(progress * dist * amplitude - progress * speed) + .5) / 30.;\n\treturn mix(\n\t\tgetFromColor(uv + offset),\n\t\tgetToColor(uv),\n\t\tsmoothstep(0.2, 1.0, progress)\n\t);\n}\n"
	    },
	    pageCurl: {
	        uniforms: {},
	        source: "\n// author: Hewlett-Packard\n// license: BSD 3 Clause\n// Adapted by Sergey Kosarevsky from:\n// http://rectalogic.github.io/webvfx/examples_2transition-shader-pagecurl_8html-example.html\n\n/*\nCopyright (c) 2010 Hewlett-Packard Development Company, L.P. All rights reserved.\n\nRedistribution and use in source and binary forms, with or without\nmodification, are permitted provided that the following conditions are\nmet:\n\n\t* Redistributions of source code must retain the above copyright\n\t\tnotice, this list of conditions and the following disclaimer.\n\t* Redistributions in binary form must reproduce the above\n\t\tcopyright notice, this list of conditions and the following disclaimer\n\t\tin the documentation and/or other materials provided with the\n\t\tdistribution.\n\t* Neither the name of Hewlett-Packard nor the names of its\n\t\tcontributors may be used to endorse or promote products derived from\n\t\tthis software without specific prior written permission.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n\"AS IS\" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\nLIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\nA PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\nOWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\nSPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\nLIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\nDATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\nTHEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\nOF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\nin vec2 texCoord;\n*/\n\nconst float MIN_AMOUNT = -0.16;\nconst float MAX_AMOUNT = 1.3;\nfloat amount = progress * (MAX_AMOUNT - MIN_AMOUNT) + MIN_AMOUNT;\n\nconst float PI = 3.141592653589793;\n\nconst float scale = 512.0;\nconst float sharpness = 3.0;\n\nfloat cylinderCenter = amount;\n// 360 degrees * amount\nfloat cylinderAngle = 2.0 * PI * amount;\n\nconst float cylinderRadius = 1.0 / PI / 2.0;\n\nvec3 hitPoint(float hitAngle, float yc, vec3 point, mat3 rrotation)\n{\n\tfloat hitPoint = hitAngle / (2.0 * PI);\n\tpoint.y = hitPoint;\n\treturn rrotation * point;\n}\n\nvec4 antiAlias(vec4 color1, vec4 color2, float distanc)\n{\n\tdistanc *= scale;\n\tif (distanc < 0.0) return color2;\n\tif (distanc > 2.0) return color1;\n\tfloat dd = pow(1.0 - distanc / 2.0, sharpness);\n\treturn ((color2 - color1) * dd) + color1;\n}\n\nfloat distanceToEdge(vec3 point)\n{\n\tfloat dx = abs(point.x > 0.5 ? 1.0 - point.x : point.x);\n\tfloat dy = abs(point.y > 0.5 ? 1.0 - point.y : point.y);\n\tif (point.x < 0.0) dx = -point.x;\n\tif (point.x > 1.0) dx = point.x - 1.0;\n\tif (point.y < 0.0) dy = -point.y;\n\tif (point.y > 1.0) dy = point.y - 1.0;\n\tif ((point.x < 0.0 || point.x > 1.0) && (point.y < 0.0 || point.y > 1.0)) return sqrt(dx * dx + dy * dy);\n\treturn min(dx, dy);\n}\n\nvec4 seeThrough(float yc, vec2 p, mat3 rotation, mat3 rrotation)\n{\n\tfloat hitAngle = PI - (acos(yc / cylinderRadius) - cylinderAngle);\n\tvec3 point = hitPoint(hitAngle, yc, rotation * vec3(p, 1.0), rrotation);\n\tif (yc <= 0.0 && (point.x < 0.0 || point.y < 0.0 || point.x > 1.0 || point.y > 1.0))\n\t{\n\t\treturn getToColor(p);\n\t}\n\n\tif (yc > 0.0) return getFromColor(p);\n\n\tvec4 color = getFromColor(point.xy);\n\tvec4 tcolor = vec4(0.0);\n\n\treturn antiAlias(color, tcolor, distanceToEdge(point));\n}\n\nvec4 seeThroughWithShadow(float yc, vec2 p, vec3 point, mat3 rotation, mat3 rrotation)\n{\n\tfloat shadow = distanceToEdge(point) * 30.0;\n\tshadow = (1.0 - shadow) / 3.0;\n\n\tif (shadow < 0.0) shadow = 0.0; else shadow *= amount;\n\n\tvec4 shadowColor = seeThrough(yc, p, rotation, rrotation);\n\tshadowColor.r -= shadow;\n\tshadowColor.g -= shadow;\n\tshadowColor.b -= shadow;\n\n\treturn shadowColor;\n}\n\nvec4 backside(float yc, vec3 point)\n{\n\tvec4 color = getFromColor(point.xy);\n\tfloat gray = (color.r + color.b + color.g) / 15.0;\n\tgray += (8.0 / 10.0) * (pow(1.0 - abs(yc / cylinderRadius), 2.0 / 10.0) / 2.0 + (5.0 / 10.0));\n\tcolor.rgb = vec3(gray);\n\treturn color;\n}\n\nvec4 behindSurface(vec2 p, float yc, vec3 point, mat3 rrotation)\n{\n\tfloat shado = (1.0 - ((-cylinderRadius - yc) / amount * 7.0)) / 6.0;\n\tshado *= 1.0 - abs(point.x - 0.5);\n\n\tyc = (-cylinderRadius - cylinderRadius - yc);\n\n\tfloat hitAngle = (acos(yc / cylinderRadius) + cylinderAngle) - PI;\n\tpoint = hitPoint(hitAngle, yc, point, rrotation);\n\n\tif (yc < 0.0 && point.x >= 0.0 && point.y >= 0.0 && point.x <= 1.0 && point.y <= 1.0 && (hitAngle < PI || amount > 0.5))\n\t{\n\t\tshado = 1.0 - (sqrt(pow(point.x - 0.5, 2.0) + pow(point.y - 0.5, 2.0)) / (71.0 / 100.0));\n\t\tshado *= pow(-yc / cylinderRadius, 3.0);\n\t\tshado *= 0.5;\n\t}\n\telse\n\t{\n\t\tshado = 0.0;\n\t}\n\treturn vec4(getToColor(p).rgb - shado, 1.0);\n}\n\nvec4 transition(vec2 p) {\n\n\tconst float angle = 30.0 * PI / 180.0;\n\tfloat c = cos(-angle);\n\tfloat s = sin(-angle);\n\n\tmat3 rotation = mat3(\n\t\tc, s, 0,\n\t\t-s, c, 0,\n\t\t0.12, 0.258, 1\n\t);\n\tc = cos(angle);\n\ts = sin(angle);\n\n\tmat3 rrotation = mat3(\n\t\tc, s, 0,\n\t\t-s, c, 0,\n\t\t0.15, -0.5, 1\n\t);\n\n\tvec3 point = rotation * vec3(p, 1.0);\n\n\tfloat yc = point.y - cylinderCenter;\n\n\tif (yc < -cylinderRadius)\n\t{\n\t\t// Behind surface\n\t\treturn behindSurface(p,yc, point, rrotation);\n\t}\n\n\tif (yc > cylinderRadius)\n\t{\n\t\t// Flat surface\n\t\treturn getFromColor(p);\n\t}\n\n\tfloat hitAngle = (acos(yc / cylinderRadius) + cylinderAngle) - PI;\n\n\tfloat hitAngleMod = mod(hitAngle, 2.0 * PI);\n\tif ((hitAngleMod > PI && amount < 0.5) || (hitAngleMod > PI/2.0 && amount < 0.0))\n\t{\n\t\treturn seeThrough(yc, p, rotation, rrotation);\n\t}\n\n\tpoint = hitPoint(hitAngle, yc, point, rrotation);\n\n\tif (point.x < 0.0 || point.y < 0.0 || point.x > 1.0 || point.y > 1.0)\n\t{\n\t\treturn seeThroughWithShadow(yc, p, point, rotation, rrotation);\n\t}\n\n\tvec4 color = backside(yc, point);\n\n\tvec4 otherColor;\n\tif (yc < 0.0)\n\t{\n\t\tfloat shado = 1.0 - (sqrt(pow(point.x - 0.5, 2.0) + pow(point.y - 0.5, 2.0)) / 0.71);\n\t\tshado *= pow(-yc / cylinderRadius, 3.0);\n\t\tshado *= 0.5;\n\t\totherColor = vec4(0.0, 0.0, 0.0, shado);\n\t}\n\telse\n\t{\n\t\totherColor = getFromColor(p);\n\t}\n\n\tcolor = antiAlias(color, otherColor, cylinderRadius - abs(yc));\n\n\tvec4 cl = seeThroughWithShadow(yc, p, point, rotation, rrotation);\n\tfloat dist = distanceToEdge(point);\n\n\treturn antiAlias(color, cl, dist);\n}\n"
	    }
	};
	function getShader(effectName) {
	    return shaders[effectName];
	}
	function addShader(effectName, source, uniforms) {
	    shaders[effectName] = {
	        uniforms: uniforms,
	        source: source,
	    };
	}

	var UV = new Float32Array([
	    0.0, 0.0,
	    1.0, 0.0,
	    0.0, 1.0,
	    1.0, 0.0,
	    1.0, 1.0,
	    0.0, 1.0,
	]);
	var GLSlideshow = (function (_super) {
	    __extends(GLSlideshow, _super);
	    function GLSlideshow(images, options) {
	        if (options === void 0) { options = {}; }
	        var _this = _super.call(this) || this;
	        _this.duration = 1000;
	        _this.interval = 5000;
	        _this._currentIndex = 0;
	        _this._startTime = 0;
	        _this._elapsedTime = 0;
	        _this._pauseStartTime = 0;
	        _this._transitionStartTime = 0;
	        _this._progress = 0;
	        _this._isRunning = true;
	        _this._inTranstion = false;
	        _this._hasUpdated = true;
	        _this._images = [];
	        _this._resolution = new Float32Array([0, 0]);
	        _this._destroyed = false;
	        _this._vertexes = new Float32Array([
	            -1, -1,
	            1, -1,
	            -1, 1,
	            1, -1,
	            1, 1,
	            -1, 1,
	        ]);
	        _this._startTime = Date.now();
	        _this.duration = options && options.duration || 1000;
	        _this.interval = Math.max(options && options.interval || 5000, _this.duration);
	        _this._domElement = options && options.canvas || document.createElement('canvas');
	        images.forEach(function (image, i) { return _this.insert(image, i); });
	        _this._resolution[0] = options.width || _this._domElement.width;
	        _this._resolution[1] = options.height || _this._domElement.height;
	        _this._imageAspect = options.imageAspect || _this._resolution[0] / _this._resolution[1];
	        _this._gl = getWebglContext(_this._domElement);
	        _this._vertexBuffer = _this._gl.createBuffer();
	        _this._uvBuffer = _this._gl.createBuffer();
	        _this._vertexShader = _this._gl.createShader(_this._gl.VERTEX_SHADER);
	        _this._gl.shaderSource(_this._vertexShader, VERTEX_SHADER_SOURCE);
	        _this._gl.compileShader(_this._vertexShader);
	        _this.setEffect(options.effect || 'crossFade');
	        var tick = function () {
	            if (_this._destroyed)
	                return;
	            if (_this._isRunning)
	                _this._elapsedTime = Date.now() - _this._startTime;
	            requestAnimationFrame(tick);
	            if (_this.interval + _this.duration < _this._elapsedTime) {
	                _this.transition(_this.nextIndex);
	            }
	            if (_this._hasUpdated)
	                _this.render();
	        };
	        tick();
	        return _this;
	    }
	    GLSlideshow.addShader = function (effectName, source, uniforms) {
	        addShader(effectName, source, uniforms);
	    };
	    Object.defineProperty(GLSlideshow.prototype, "domElement", {
	        get: function () {
	            return this._domElement;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(GLSlideshow.prototype, "currentIndex", {
	        get: function () {
	            return this._currentIndex;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(GLSlideshow.prototype, "nextIndex", {
	        get: function () {
	            return (this._currentIndex < this._images.length - 1) ? this._currentIndex + 1 : 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(GLSlideshow.prototype, "prevIndex", {
	        get: function () {
	            return (this._currentIndex !== 0) ? this._currentIndex - 1 : this._images.length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(GLSlideshow.prototype, "inTranstion", {
	        get: function () {
	            return this._inTranstion;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    GLSlideshow.prototype.transition = function (to) {
	        this._from.setImage(this._images[this._currentIndex]);
	        this._to.setImage(this._images[to]);
	        this._transitionStartTime = Date.now();
	        this._startTime = Date.now();
	        this._currentIndex = to;
	        this._inTranstion = true;
	        this._hasUpdated = true;
	        this.dispatchEvent({ type: 'transitionStart' });
	    };
	    GLSlideshow.prototype.play = function () {
	        if (this._isRunning)
	            return this;
	        var pauseElapsedTime = Date.now() - this._pauseStartTime;
	        this._startTime += pauseElapsedTime;
	        this._isRunning = true;
	        delete this._pauseStartTime;
	        return this;
	    };
	    GLSlideshow.prototype.pause = function () {
	        if (!this._isRunning)
	            return this;
	        this._isRunning = false;
	        this._pauseStartTime = Date.now();
	        return this;
	    };
	    GLSlideshow.prototype.insert = function (image, order) {
	        var _this = this;
	        var onload = function (event) {
	            if (!(event.target instanceof Element))
	                return;
	            _this._hasUpdated = true;
	            event.target.removeEventListener('load', onload);
	        };
	        if (image instanceof Image) {
	            image.addEventListener('load', onload);
	        }
	        else if (typeof image === 'string') {
	            var src = image;
	            image = new Image();
	            image.addEventListener('load', onload);
				image.src = src;
				// image.crossOrigin = 'anonymous';
	        }
	        else {
	            return;
	        }
	        this._images.splice(order, 0, image);
	    };
	    GLSlideshow.prototype.remove = function (order) {
	        if (this._images.length === 1)
	            return;
	        this._images.splice(order, 1);
	    };
	    GLSlideshow.prototype.replace = function (images) {
	        var _this = this;
	        var length = this._images.length;
	        images.forEach(function (image) { return _this.insert(image, _this._images.length); });
	        for (var i = 0 | 0; i < length; i = (i + 1) | 0) {
	            this.remove(0);
	        }
	        this._hasUpdated = true;
	        this.transition(0);
	    };
	    GLSlideshow.prototype.setEffect = function (effectName) {
	        var shader = getShader(effectName);
	        var FSSource = FRAGMENT_SHADER_SOURCE_HEAD +
	            shader.source +
	            FRAGMENT_SHADER_SOURCE_FOOT;
	        var uniforms = shader.uniforms;
	        if (this._program) {
	            this._gl.deleteTexture(this._from.texture);
	            this._gl.deleteTexture(this._to.texture);
	            this._gl.deleteShader(this._fragmentShader);
	            this._gl.deleteProgram(this._program);
	        }
	        this._fragmentShader = this._gl.createShader(this._gl.FRAGMENT_SHADER);
	        this._gl.shaderSource(this._fragmentShader, FSSource);
	        this._gl.compileShader(this._fragmentShader);
	        this._program = this._gl.createProgram();
	        this._gl.attachShader(this._program, this._vertexShader);
	        this._gl.attachShader(this._program, this._fragmentShader);
	        this._gl.linkProgram(this._program);
	        this._gl.useProgram(this._program);
	        this._gl.bindBuffer(this._gl.ARRAY_BUFFER, this._vertexBuffer);
	        this._gl.bufferData(this._gl.ARRAY_BUFFER, this._vertexes, this._gl.STATIC_DRAW);
	        var position = this._gl.getAttribLocation(this._program, 'position');
	        this._gl.vertexAttribPointer(position, 2, this._gl.FLOAT, false, 0, 0);
	        this._gl.enableVertexAttribArray(position);
	        this._gl.bindBuffer(this._gl.ARRAY_BUFFER, this._uvBuffer);
	        this._gl.bufferData(this._gl.ARRAY_BUFFER, UV, this._gl.STATIC_DRAW);
	        var uv = this._gl.getAttribLocation(this._program, 'uv');
	        this._gl.vertexAttribPointer(uv, 2, this._gl.FLOAT, false, 0, 0);
	        this._gl.enableVertexAttribArray(uv);
	        this._uniformLocations = {
	            progress: this._gl.getUniformLocation(this._program, 'progress'),
	            resolution: this._gl.getUniformLocation(this._program, 'resolution'),
	            from: this._gl.getUniformLocation(this._program, 'from'),
	            to: this._gl.getUniformLocation(this._program, 'to')
	        };
	        for (var i in uniforms) {
	            this._uniformLocations[i] = this._gl.getUniformLocation(this._program, i);
	            this._setUniform(i, uniforms[i]);
	        }
	        this._from = new Texture(this._images[this._currentIndex], this._gl);
	        this._to = new Texture(this._images[this.nextIndex], this._gl);
	        this._from.addEventListener('updated', this._updateTexture.bind(this));
	        this._to.addEventListener('updated', this._updateTexture.bind(this));
	        this._progress = 0;
	        this.setSize(this._resolution[0], this._resolution[1]);
	        this._updateTexture();
	    };
	    GLSlideshow.prototype.setSize = function (w, h) {
	        if (this._domElement.width === w && this._domElement.height === h)
	            return;
	        this._domElement.width = w;
	        this._domElement.height = h;
	        this._hasUpdated = true;
	        this._domElement.width = w;
	        this._domElement.height = h;
	        this._resolution[0] = w;
	        this._resolution[1] = h;
	        this._gl.viewport(0, 0, w, h);
	        this._gl.uniform2fv(this._uniformLocations.resolution, this._resolution);
	        var canvasAspect = this._resolution[0] / this._resolution[1];
	        var aspect = this._imageAspect / canvasAspect;
	        var posX = aspect < 1 ? 1.0 : aspect;
	        var posY = aspect > 1 ? 1.0 : canvasAspect / this._imageAspect;
	        this._vertexes[0] = -posX;
	        this._vertexes[1] = -posY;
	        this._vertexes[2] = posX;
	        this._vertexes[3] = -posY;
	        this._vertexes[4] = -posX;
	        this._vertexes[5] = posY;
	        this._vertexes[6] = posX;
	        this._vertexes[7] = -posY;
	        this._vertexes[8] = posX;
	        this._vertexes[9] = posY;
	        this._vertexes[10] = -posX;
	        this._vertexes[11] = posY;
	        this._gl.bindBuffer(this._gl.ARRAY_BUFFER, this._vertexBuffer);
	        this._gl.bufferData(this._gl.ARRAY_BUFFER, this._vertexes, this._gl.STATIC_DRAW);
	        this._hasUpdated = true;
	    };
	    GLSlideshow.prototype.render = function () {
	        if (this._destroyed)
	            return;
	        if (this._inTranstion) {
	            var transitionElapsedTime = Date.now() - this._transitionStartTime;
	            this._progress = this._inTranstion ? Math.min(transitionElapsedTime / this.duration, 1) : 0;
	            this._gl.uniform1f(this._uniformLocations.progress, this._progress);
	            this._gl.clear(this._gl.COLOR_BUFFER_BIT | this._gl.DEPTH_BUFFER_BIT);
	            this._gl.drawArrays(this._gl.TRIANGLES, 0, 6);
	            this._gl.flush();
	            if (this._progress === 1) {
	                this._inTranstion = false;
	                this._hasUpdated = false;
	                this.dispatchEvent({ type: 'transitionEnd' });
	            }
	        }
	        else {
	            this._gl.uniform1f(this._uniformLocations.progress, this._progress);
	            this._gl.clear(this._gl.COLOR_BUFFER_BIT | this._gl.DEPTH_BUFFER_BIT);
	            this._gl.drawArrays(this._gl.TRIANGLES, 0, 6);
	            this._gl.flush();
	            this._hasUpdated = false;
	        }
	    };
	    GLSlideshow.prototype.destory = function () {
	        this._destroyed = true;
	        this._isRunning = false;
	        this._inTranstion = false;
	        this.setSize(1, 1);
	        if (this._program) {
	            this._gl.activeTexture(this._gl.TEXTURE0);
	            this._gl.bindTexture(this._gl.TEXTURE_2D, null);
	            this._gl.activeTexture(this._gl.TEXTURE1);
	            this._gl.bindTexture(this._gl.TEXTURE_2D, null);
	            this._gl.bindBuffer(this._gl.ARRAY_BUFFER, null);
	            this._gl.deleteTexture(this._from.texture);
	            this._gl.deleteTexture(this._to.texture);
	            this._gl.deleteBuffer(this._vertexBuffer);
	            this._gl.deleteBuffer(this._uvBuffer);
	            this._gl.deleteShader(this._vertexShader);
	            this._gl.deleteShader(this._fragmentShader);
	            this._gl.deleteProgram(this._program);
	        }
	        if (!!this._domElement.parentNode) {
	            this._domElement.parentNode.removeChild(this._domElement);
	        }
	        delete this._from;
	        delete this._to;
	        delete this._domElement;
	    };
	    GLSlideshow.prototype._setUniform = function (key, value) {
	        if (!this._program)
	            return;
	        var uniformLocation = this._gl.getUniformLocation(this._program, key);
	        if (typeof value === 'number') {
	            this._gl.uniform1f(uniformLocation, value);
	        }
	        else if (Array.isArray(value) && value.length === 2) {
	            this._gl.uniform2f(uniformLocation, value[0], value[1]);
	        }
	        else if (Array.isArray(value) && value.length === 3) {
	            this._gl.uniform3f(uniformLocation, value[0], value[1], value[2]);
	        }
	        else if (Array.isArray(value) && value.length === 4) {
	            this._gl.uniform4f(uniformLocation, value[0], value[1], value[2], value[3]);
	        }
	    };
	    GLSlideshow.prototype._updateTexture = function () {
	        this._gl.activeTexture(this._gl.TEXTURE0);
	        this._gl.bindTexture(this._gl.TEXTURE_2D, this._from.texture);
	        this._gl.uniform1i(this._uniformLocations.from, 0);
	        this._gl.activeTexture(this._gl.TEXTURE1);
	        this._gl.bindTexture(this._gl.TEXTURE_2D, this._to.texture);
	        this._gl.uniform1i(this._uniformLocations.to, 1);
	        this._hasUpdated = true;
	    };
	    return GLSlideshow;
	}(EventDispatcher));

	return GLSlideshow;

}));
},{}],7:[function(require,module,exports){
'use strict';

//for all tags, title = alt
let listA = [
    {
        src: './pics/aluminumPipefittings.jpg',
        alt: 'alluminium pipes & fittings',
        label: 'manufactured, supplied, installed: for portable sprinklers.',
    },
    {
        src: './pics/horsePipe.jpg',
        alt: 'horses',
        label: 'irrigation pipes sizes range from 0.5 - 3 inches.',
    },
    {
        src: './pics/brassGateValve.jpg',
        alt: 'cast iron & brass gate valves',
        label: 'imported & distributed in all sizes.',
    },
    {
        src: './pics/hydromaticValves.jpg',
        alt: 'hydromatic valves',
        label: 'manufactured according to user specification.'
    },    
    {
        src: './pics/tank.jpg',
        alt: 'tanks',
        label: 'water tanks range from 1000 - 10 000l. Tank stands also available, for installation.',
    },    
]

let listB = [
    {
        src: './pics/solarPanels.jpg',
        alt: 'solar panels',
        label: 'supplied & installed for irrigation & water supply.',
    },   
    {
    src: './pics/sprinklers.jpg',
    alt: 'brass & plastic sprinklers',
    label: 'all sizes imported & supplied.',
    },  
    {
    src: './pics/heavyDutyPrimingPump.jpg',
    alt: 'heavy duty priming pumps',
    label: 'manufactured & supplied.',
    },  
    {
    src: './pics/sluiceGate.jpg',
    alt: 'sluice gates',
    label: 'all sizes manufactured & installed.',
    },
    {
        src: './pics/pumpSet.jpg',
        alt: 'portable & fixed base pump sets',
        label: 'all sizes assembled & supplied, includes pontoon pump sets.',
    },  
]

let popularProducts = Math.random() > 0.5 ? listA : listB;

module.exports = popularProducts;
},{}],8:[function(require,module,exports){
'use strict';

let projectId = [
    'surfaceIrrigationConstruction',
    'overheadSprinklerIrrigationConstruction',
    'dripIrrigationConstruction',
    'centerPivot',
    'waterSupply',
]

module.exports = projectId;
},{}],9:[function(require,module,exports){
'use strict';

let appendElement = require('../../js/coolFunx/methods/generateHtmlElement.js');

let projectList = [
    'surface irrigation construction',
    'overhead sprinkler irrigation construction',
    'drip irrigation construction',
    'center pivot',
    'water supply',
]

let projectId = require('./projectId');

//can be refactored to a utility method that generates mulitple similar elements
function createProjectList(){
    for (let project of projectList){
        appendElement('ourProductsSlideShow', 
                [
                                'button', projectId[projectList.indexOf(project)], 
                                ' w3-project w3-btn w3-section w3-bg-black-ter w3-hover-black w3-text-light-grey', 
                                [ ['style', 'display: block'], ['style', 'margin: auto'] ] 
                            ]
                    )
        //set the innerText of each project = project
        document.getElementById(projectId[projectList.indexOf(project)]).innerText = project;
    }
}

module.exports = createProjectList;
},{"../../js/coolFunx/methods/generateHtmlElement.js":1,"./projectId":8}],10:[function(require,module,exports){
'use strict';

let addSlideShow = require('./addSlideShow');

let projectId = require('./projectId');

function createSlideShow(){
    for(let project of projectId){
        document.getElementById( project ).addEventListener('click', addSlideShow(project));
    }
}

module.exports = createSlideShow;
},{"./addSlideShow":3,"./projectId":8}],11:[function(require,module,exports){
'use strict';

let subscribeButton = document.getElementById('mailTo'); //even though html id=mailTo

let userEmailAddress = document.getElementById('mailTo').value;
let mailTo = 'bmadamba11@gmail.com';
let cc = userEmailAddress; //contacts who you want to know about the email but are not required to action or respond to it
let bcc = 'codemusltd@gmail.com'; //blind cc contacts will not be seen by other recipients (client or BusinessOwner)
let subject = 'Customer%20Subscription.';
//new space = %20
//new line = %0D%0A
let body = `This%20is%20a%20message%20to%20notify%20WaterFlo%20Engineering%20of%20the%20client's,%20${userEmailAddress},
            %0D%subscription%20for%20occassional%20letters%20&/or%20emails
            %20regarding%20products,%20discounts%20&%20services%20offered%20by%20Waterflo.
            %0D%0AEffective%20as%20of%20today.`;

let email = `mailto:${mailTo}?
            cc=${cc}&bcc=${bcc}&amp;subject=${subject}&amp;body=${body}`;


function subscribe(){
    subscribeButton.addEventListener('click', function(){
        subscribeButton.href = email;
    })
}

module.exports = subscribe;

},{}]},{},[5]);
