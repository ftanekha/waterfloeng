'use strict';

const khakiTheme = document.querySelector('div#khakiTheme');
const lightGreyTheme = document.querySelector('div#lightGreyTheme');
const allElements = document.querySelectorAll('*');

lightGreyTheme.addEventListener(
    'click',() => {
        for(let i = 0; i < allElements .length; i++){
            if(allElements [i].classList.contains('w3-khaki')){
                allElements [i].classList.remove('w3-khaki');
                allElements [i].classList.add('w3-light-grey');
            }
        }
    }
);

khakiTheme.addEventListener(
    'click',() => {
        for(let i = 0; i < allElements .length; i++){
            if(allElements [i].classList.contains('w3-light-grey')){
                allElements [i].classList.remove('w3-light-grey');
                allElements [i].classList.add('w3-khaki');
            }
        }
    }
);