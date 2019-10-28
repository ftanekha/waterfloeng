'use strict';

let navBarItems = require('./addNavBarItems');
let projectList = require('./projectList');
let projectSlideShow = require('./projectSlideShow');
let popularItems = require('./addPopularProducts');
let tags = require('./addTags');
let followUsLinks = require('./addFollowUsLinks');
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

//display navBarItems
navBarItems();

//create projects heading
let projectsHeading = document.createElement('h4');
projectsHeading.id = 'ourProjectsHeading';
projectsHeading.className += ' w3-card w3-center w3-light-grey w3-c-black-ter';
projectsHeading.innerText = 'Our projects';
document.getElementById('ourProductsSlideShow').append(projectsHeading);

//
let ourProductsSlideShow = document.getElementById('ourProductsSlideShow');
ourProductsSlideShow.addEventListener('click', displayProjectMenu);

//display popular products
popularItems();

//appendtags
tags();

//append follow us links
followUsLinks();

//
subscribeButton();

//export theading o exitProjectMenu
module.exports = projectsHeading;