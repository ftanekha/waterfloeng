'use strict';

let appendElement = require('../../js/coolFunx/methods/generateHtmlElement.js');

let tags = [
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

function addTags (){
    //create a p tag to wrap around the tags
    appendElement('tagsContainer', 
    [
        'p', 'tags', ' w3-text-black',
        []
    ])

    //append the tags
    for(let tag of tags){
        appendElement('tags', 
    [
            'span', `tag_${tag}`, ' w3-tag w3-light-grey w3-small w3-margin-bottom',
            []
        ]);

        document.getElementById(`tag_${tag}`).innerText = tag;
    }
}


module.exports = addTags;