'use strict';

const tagList = [
    'alluminium pipes & fittings',  
    'cast iron & brass gate valves', 
    'hydromatic valves',  
    'tanks',
    'horses',  
    'solar panels',  
    'portable & fixed base pump sets', 
    'brass & plastic sprinklers', 
    'heavy duty priming pumps',  
    'sluice gates', 
]

const tagsContainer = document.getElementById('tagsContainer');
const tags = document.createElement('p');
tagsContainer.appendChild(tags);
tags.id = 'tags';
tags.className += ' w3-text-black';

//append the tags
for(let tag of tagList){
    const newTag = document.createElement('span');
    newTag.id = `tag_${tag}`;
    newTag.className += ' w3-tag w3-light-grey w3-small w3-margin-bottom'
    newTag.innerText = tag;
    tags.appendChild(newTag);
}