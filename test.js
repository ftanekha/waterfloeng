'use strict';

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

let imageAttr = {
    width: 300,      // optional
    height: 225, 
}       

let slideShowImage = document.getElementById( 'slideShowImage' );
slideShowImage.style.width = imageAttr.width + 'px';
slideShowImage.style.height = imageAttr.height + 'px';
slideShowImage.style.margin = 'auto';
slideShowImage.alt = 'slide show image';
slideShowImage.className += ' w3-animate-right';

function getSlideShowImage(){
    let imageIndex = 0;
    setInterval(() => {
        for (; imageIndex < surfaceIrrigationConstructionPics.length; ){
            imageIndex = imageIndex === surfaceIrrigationConstructionPics.length ? 0 : imageIndex++;
            slideShowImage.src = surfaceIrrigationConstructionPics[ imageIndex ];
        }
    }, 5000);
}
