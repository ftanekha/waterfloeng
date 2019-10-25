// 'use strict';

// let arr = ['./pics/tank.jpg', './pics/valve.jpg', './pics/pipe.jpg'];

// let counter = 0;

// setInterval(() => {
//     let image = document.getElementById('image');
//     image.src = arr[counter];
//     counter++;
//     if(counter == 3) counter = 0;
// }, 1000);

// //team photo

'use strict';

let popularProducts = require('./popularProducts');
// let appendElement = require('../../js/coolFunx/methods/generateHtmlElement.js');


    for(let product of popularProducts){
        console.log(product.src)
    }
