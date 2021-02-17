'use strict';

const navBarItems = [
    {
        media:'facebook-official',
        href: 'https://www.facebook.com/Waterfloengineering'
    },
    {
        media:'twitter',
        href: 'https://twitter.com/waterfloengine1'
    },
    {
        media:'linkedin',
        href: 'https://zw.linkedin.com/in/blazio-madamba-31a15477'
    }
] 

function generateElement(tag, id, clas, attrs){
    const el = document.createElement(tag);
    el.id = id !== undefined ? id : '';
    el.className += clas !== undefined ? clas : '';
    if(attrs && attrs !== undefined) for(let att of attrs) el.setAttribute(att[0], att[1]);

    return el;
}

//append the element to the DOM using the Id attribute of the targeted parent element;
//elementDetails = array[tagName, id, classname, [ [attribute, value], [attrbute, value]....]
function appendElement(parentId, elementDetails){
    const parentNode = document.getElementById(parentId);
    if(elementDetails !== undefined && typeof elementDetails === 'object') parentNode.append(generateElement(...elementDetails));
}

function addNavBarItems(){
    for(let item of navBarItems){
        appendElement('navBar',
        [
                'a', item.media, 
                ' w3-bar-item w3-button',
                [
                    ['href', item.href], ['target', '_blank'],
                ]
            ]
        );
        const icon = document.createElement('i');
        icon.className += ` fa fa-${item.media}`;
        document.getElementById(item.media).append(icon);
    }
}

addNavBarItems();