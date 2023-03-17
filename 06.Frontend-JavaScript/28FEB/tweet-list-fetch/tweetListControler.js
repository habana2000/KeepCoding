import { getTweets } from "./tweets.js";
import { buildTweetView, buildSpinnerView, buildErrorLoadingTweets } from "./tweetView.js";

export async function tweetListControler(tweetListElement) { 
    
    // mostrar ruleta
    tweetListElement.innerHTML = buildSpinnerView();

    let tweets = [];

    try {
        tweets = await getTweets();
        // ocultar ruleta
        const spinnerElement = tweetListElement.querySelector('.spinner');
        spinnerElement.classList.add('hide');
        /**
         * Otra manera de ocultarla
        tweetListElement.innerHTML = '';   
        */
       for (const tweet of tweets) {
           const newTweetElement = buildTweetView(tweet);
           tweetListElement.appendChild(newTweetElement) // NOTA: Pintar todos los tweets a la vez
       }
    } catch (error) {
        // gestión del error
        tweetListElement.innerHTML = buildErrorLoadingTweets();
    }


}
