'use strict';

let displayProjectMenu = require('./app');

function showProjectsHeading(){
    document.getElementById('projectsMenuContainer').remove();
    document.getElementById('exitMenuButton').remove();
    // re-append projectHeading
    let projectsHeading = document.createElement('h4');
    projectsHeading.id = 'ourProjectsHeading';
    projectsHeading.className += ' w3-card w3-center w3-light-grey w3-c-black-ter';
    projectsHeading.innerText = 'Our projects'.toUpperCase();
    projectsHeading.addEventListener('click', displayProjectMenu);
    document.getElementById('ourProductsSlideShow').append(projectsHeading);
}

function exitProjectMenu(){
        document.getElementById('ourProductsSlideShow').style.position = 'relative';
        //create button for exiting the project menu
        let exitMenuButton = document.createElement('span');
        exitMenuButton.id = 'exitMenuButton';
        exitMenuButton.className += 'w3-text-red w3-small w3-codespan w3-right';
        exitMenuButton.innerText = 'x';
        exitMenuButton.style.position = 'absolute';
        exitMenuButton.style.top = 1 +'px';
        exitMenuButton.style.right = 1 +'px';
        document.getElementById('ourProductsSlideShow').append(exitMenuButton);

        exitMenuButton.addEventListener('click', showProjectsHeading);
}

module.exports = exitProjectMenu;