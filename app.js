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

//export heading to exitProjectMenu
module.exports = displayProjectMenu;