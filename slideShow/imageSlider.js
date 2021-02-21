'use strict';

const projectsInfo = {
    'surface irrigation':{
        size : 18,
        // imageFormat : ''
    },
    'overhead sprinkler irrigation':{
        size : 7,
    },
    'drip irrigation':{
        size : 9,
    },
    'center pivot':{
        size : 9,
    },
    'water supply':{
        size : 12,
    }
};

const projects = document.getElementsByClassName('projects');
for(let project of projects){
    project.addEventListener('mouseover',
        (e) => {
            e.target.style.fontSize = 1.5 + 'em';
            e.target.title = 'click me to start slide show';
            e.target.classList.add('url');
        }
    );
    project.addEventListener('mouseout',
        (e) => {
            e.target.style.color = '#f1f1f1';
            e.target.style.fontSize = 1 + 'em';
            e.target.classList.remove('url');
        }
    );
    project.addEventListener('click',
        (e)=> {
            const slideTitle = document.getElementById('ourProjectsHeading');
            slideTitle.innerText = e.target.innerText.toUpperCase();
            startImageSlider(e.target.innerText);

            document.getElementById('closeSlide').style.display = 'block';
        }
    );
}

function startImageSlider (projectName){
    const projectList = document.getElementById('projectList'); 
    projectList.style.display = 'none';
    const imageSlider = document.getElementById('imageSlider');
    imageSlider.style.display = 'flex';
    const image = document.getElementById('image');

    const projectImages = [];
    for(let i = 0; i < projectsInfo[projectName].size; i++){
        projectImages.push(`../pics/${projectName}/${i}.jpg`);
    }

    let imageIndex = 0;
    function displaySlides(){
        //to start slide show
        if (imageIndex >= projectImages.length) imageIndex = 0;
        image.src = `../pics/${projectName}/${imageIndex}.jpg`;
        imageIndex++;
        let timer = setTimeout(displaySlides, 1000); 
        //to stop slide show 
        function stopImageSlider(){
            const closeSlide = document.getElementById('closeSlide');
            closeSlide.addEventListener('click',
                (e) => {
                    document.getElementById('imageSlider').style.display = 'none';
                    document.getElementById('projectList').style.display = 'block';
        
                    const slideTitle = document.getElementById('ourProjectsHeading');
                    slideTitle.innerText = 'OUR PROJECTS';
                    clearTimeout(timer);

                    e.target.style.display = 'none';
                }
            )
        }
        stopImageSlider();
    }
    displaySlides();
}
