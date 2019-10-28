'use strict';

let appendElement = require('../../js/coolFunx/methods/generateHtmlElement.js');
let exitProjectMenu = require('./exitProjectMenu');
let projectId = require('./projectId');
let projectList = [
    'surface irrigation construction',
    'overhead sprinkler irrigation construction',
    'drip irrigation construction',
    'center pivot',
    'water supply',
]

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
    
    exitProjectMenu();
}

module.exports = createProjectList;