'use strict';

let addSlideShow = require('./addSlideShow');

let projectId = require('./projectId');

function createSlideShow(){
    for(let project of projectId){
        document.getElementById( project ).addEventListener('click', addSlideShow(project));
    }
}

module.exports = createSlideShow;