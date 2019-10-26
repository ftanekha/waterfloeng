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
