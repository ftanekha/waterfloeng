'use strict';

(
    async url => {
        try{
            const data = await (
                await fetch(url)
            ).json();

            data.length = 3;

            for(let piece of data){
                if(piece.title != undefined){
                    document.getElementById('tba').classList.add('w3-hide');
                    const news = document.getElementById('news');
                    news.classList.remove('w3-hide');

                    const standOutText = document.createElement('kbd');
                    standOutText.innerText = piece.title;

                    const pieceOfNews = document.createElement('li');
                    pieceOfNews.id = `pieceOfNews_${data.indexOf(piece)}`;
                    pieceOfNews.className = 'news w3-text-teal';
                    pieceOfNews.append(standOutText);

                    news.append(pieceOfNews);
                }
            }

        }catch(err){
            console.error(`Error detected & caught: ${err.message}`);
        }
    }
)('https://jsonplaceholder.typicode.com/posts')