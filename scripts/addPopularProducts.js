'use strict';

//for all tags, title = alt
const listA = [
    {
        src: './pics/popularItems/aluminumPipefittings.jpg',
        alt: 'alluminium pipes & fittings',
        label: 'manufactured, supplied, installed: for portable sprinklers.',
    },
    {
        src: './pics/popularItems/horsePipe.jpg',
        alt: 'horses',
        label: 'irrigation pipes sizes range from 0.5 - 3 inches.',
    },
    {
        src: './pics/popularItems/brassGateValve.jpg',
        alt: 'cast iron & brass gate valves',
        label: 'imported & distributed in all sizes.',
    },
    {
        src: './pics/popularItems/hydromaticValves.jpg',
        alt: 'hydromatic valves',
        label: 'manufactured according to user specification.'
    },    
    {
        src: './pics/popularItems/tank.jpg',
        alt: 'tanks',
        label: 'water tanks range from 1000 - 10 000l. Tank stands also available, for installation.',
    },    
]

const listB = [
    {
        src: './pics/popularItems/solarPanels.jpg',
        alt: 'solar panels',
        label: 'supplied & installed for irrigation & water supply.',
    },   
    {
    src: './pics/popularItems/sprinklers.jpg',
    alt: 'brass & plastic sprinklers',
    label: 'all sizes imported & supplied.',
    },  
    {
    src: './pics/popularItems/heavyDutyPrimingPump.jpg',
    alt: 'heavy duty priming pumps',
    label: 'manufactured & supplied.',
    },  
    {
    src: './pics/popularItems/sluiceGate.jpg',
    alt: 'sluice gates',
    label: 'all sizes manufactured & installed.',
    },
    {
        src: './pics/popularItems/pumpSet.jpg',
        alt: 'portable & fixed base pump sets',
        label: 'all sizes assembled & supplied, includes pontoon pump sets.',
    },  
]

const popularProducts = Math.random() > 0.5 ? listA : listB;

function addPopularProducts(){
    for(let product of popularProducts){
        const listItem = document.createElement('li');
        listItem.className += ' w3-padding-16 w3-section';

        const listItemImageContainer = document.createElement('div');
        listItemImageContainer.style.clear = 'both';
        listItemImageContainer.className += ' w3-section';

        const listItemImage = document.createElement('img');
        listItemImage.src = product.src; 
        listItemImage.alt = product.alt;
        listItemImage.title = product.alt; 
        listItemImage.className += ' w3-card w3-left w3-margin-right w3-margin-bottom';

        const listItemLabel = document.createElement('span');
        listItemLabel.className += 'w3-justify w3-sand';
        listItemLabel.innerText = product.label;

        listItemImageContainer.append(listItemImage);
        listItemImageContainer.append(listItemLabel);

        listItem.append(listItemImageContainer);
        
        document.getElementById('popularItems').append(listItem);
    }
}

addPopularProducts();