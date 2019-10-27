'use strict';

let popularProducts = require('./popularProducts');
// let appendElement = require('../../js/coolFunx/methods/generateHtmlElement.js');

function addPopularProducts(){
    for(let product of popularProducts){
        let listItem = document.createElement('li');
        listItem.className += ' w3-padding-16 w3-section';

        let listItemImageContainer = document.createElement('div');
        listItemImageContainer.style.clear = 'both';
        listItemImageContainer.className += ' w3-section';

        let listItemImage = document.createElement('img');
        listItemImage.src = product.src; 
        listItemImage.alt = product.alt;
        listItemImage.title = product.alt; 
        listItemImage.className += ' w3-card w3-left w3-margin-right w3-margin-bottom';

        let listItemLabel = document.createElement('span');
        listItemLabel.className += 'w3-justify w3-sand';
        listItemLabel.innerText = product.label;

        listItemImageContainer.append(listItemImage);
        listItemImageContainer.append(listItemLabel);

        listItem.append(listItemImageContainer);
        
        document.getElementById('popularItems').append(listItem);
    }
}

module.exports = addPopularProducts;