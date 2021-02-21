'use strict';

const subscribeButton = document.getElementById('mailTo'); //even though html id=mailTo

const userEmailAddress = document.getElementById('mailTo').value;
const mailTo = 'bmadamba11@gmail.com';
const cc = userEmailAddress; //contacts who you want to know about the email but are not required to action or respond to it
const bcc = 'farai.tanekha@gmail.com'; //blind cc contacts will not be seen by other recipients (client or BusinessOwner)
const subject = 'Customer%20Subscription.';
//new space = %20
//new line = %0D%0A
const body = `This%20is%20a%20message%20to%20notify%20WaterFlo%20Engineering%20of%20the%20client's,%20${userEmailAddress},
            %0D%subscription%20for%20occassional%20constters%20&/or%20emails
            %20regarding%20products,%20discounts%20&%20services%20offered%20by%20Waterflo.
            %0D%0AEffective%20as%20of%20today.`;
const email = `mailto:${mailTo}?
            cc=${cc}&bcc=${bcc}&amp;subject=${subject}&amp;body=${body}`;


function subscribe(){
    subscribeButton.addEventListener('click', function(){
        alert(
            `type NEW SUBSCRIBER in the SUBJECT field & click SEND :)`
        );
        subscribeButton.href = email;
    })
}

subscribe();
