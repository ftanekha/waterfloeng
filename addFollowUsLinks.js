'use strict';

let followUsLinks = require('./followUsLinks');
let appendElement = require('../../../../../2019/frontend/js/coolFunx/methods/generateHtmlElement.js');

function addfollowUsLinks(){
    for(let link of followUsLinks){
        appendElement('followUs',
        [
                'a', `icon-${link.media}`, 
                ' w3-bar-item w3-button',
                [
                    ['href', link.href], ['target', '_blank'],
                ]
            ]
        );
    
        let icon = document.createElement('i');
        icon.className += ` fa fa-${link.media}`;
    
        document.getElementById(`icon-${link.media}`).append(icon);
    }
}

module.exports = addfollowUsLinks;