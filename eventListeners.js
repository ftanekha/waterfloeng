'use strict';

let appendElement = require('../../js/coolFunx/methods/generateHtmlElement.js');

let ourProductsSlideShowDiv = document.getElementById('ourProductsSlideShow');

ourProductsSlideShowDiv.addEventListener('click', function(){
    //hide heading
    document.getElementById('ourProjectsHeading').setAttribute('style', 'display: none');

    // append slideshow
    appendElement('ourProductsSlideShowDiv', 
            ['canvas', 'myCanvas', ' w3-card w3-section w3-light-grey', [ ['style', 'display: block'], ['style', 'margin: auto'] ] ]
    )
});
