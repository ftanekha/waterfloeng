'use strict';

// let appendElement = require('../../js/coolFunx/methods/generateHtmlElement.js');
let projectList = require('./projectList');

let ourProductsSlideShow = document.getElementById('ourProductsSlideShow');

//display project menu
function displayProjectMenu(){
    //hide heading
    document.getElementById('ourProjectsHeading').style.display = 'none';

    //append projectList
    projectList();
} 

ourProductsSlideShow.addEventListener('click', displayProjectMenu);

// append slideshow
// appendElement('ourProductsSlideShow', 
// ['canvas', 'myCanvas', ' w3-card w3-section w3-light-grey', [ ['style', 'display: block'], ['style', 'margin: auto'] ] ]
// )