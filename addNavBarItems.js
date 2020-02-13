'use strict';

let navBarItems = require('./navBarItems');
let appendElement = require('../../../../../2019/frontend/js/coolFunx/methods/generateHtmlElement.js');

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
        let icon = document.createElement('i');
        //*nolonger necessary
        // icon.className += item.media === 'contact' ? ` far fa-address-book` : ` fa fa-${item.media}`;
        icon.className += ` fa fa-${item.media}`;
    
        document.getElementById(item.media).append(icon);
    }

    //position search button right
    document.getElementById('contact').className += ' w3-right';
}

module.exports = addNavBarItems;