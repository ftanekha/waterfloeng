'use strict';

let subscribeButton = document.getElementById('subscribeButton');

//temporary message
function alertNoSubscribe(){
    subscribeButton.addEventListener('click', function(){
        alert(`Greetings, dearest Customer ! \nOur Subscription tech is currently under construction. \nPlease, try again later.`)
    });
}

module.exports = alertNoSubscribe;