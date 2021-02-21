'use strict';

(
    async url => {
        try{
            const data = await (
                await fetch(url)
            ).json();

            data.length = 3;

            for(let piece of data){
                if(typeof piece === 'string' && piece !== ''){
                    document.getElementById('tba').classList.add('w3-hide');
                    const news = document.getElementById('news');
                    news.classList.remove('w3-hide');
                    //marque is deprecated, if code breaks: 'text' or 'kbd' make good aletrnatives
                    const standOutText = document.createElement('marquee');
                    standOutText.innerText = piece;
                    standOutText.behavior = 'horizontal';
                    //alternate behavior
                    const alternateBehavior = setInterval(
                        () => standOutText.behavior = Math.random() > .5 ? 'horizontal' : 'alternate', 3e4
                    );
                    setTimeout(
                        ()=>{
                            clearInterval(alternateBehavior);
                            standOutText.behavior = 'horizontal';
                        }, 2.7e6
                    );

                    const pieceOfNews = document.createElement('li');
                    pieceOfNews.id = `pieceOfNews_${data.indexOf(piece)}`;
                    pieceOfNews.className = 'news w3-text-teal';
                    //alternate text color
                    const alternateColor = setInterval(
                        () => {
                            const color = Math.random();
                            pieceOfNews.className = `news ${color < .33 ? 'w3-text-white' : color < .66 ? 'w3-text-teal' : 'w3-text-orange'}`
                        }, 3e4
                    );
                    setTimeout(
                        ()=>{
                            clearInterval(alternateColor);
                            pieceOfNews.className = 'news w3-text-white';
                        }, 2.7e6
                    );
                    
                    pieceOfNews.append(standOutText);
                    news.append(pieceOfNews);
                }
            }
        }catch(err){
            console.error(`Error detected & caught: ${err.message}`);
        }
    }
)('https://gist.githubusercontent.com/bmadamba11/0d182e4a3460b7b70acfd1872a70503c/raw/6491bd406b52ba4d8f82e04707eb5840e18ebb89/news.json');