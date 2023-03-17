// Obtener el array de tweets
import { tweets } from "./tweets.js";
import { buildTweetView } from "./tweetView.js";


// Generar el HTML de que representara el tweet
export function tweetListControler(tweetListElement) { 
    
    //Limpiamos la lista primero
    tweetListElement.innerHTML = '';
    
    for (const tweet of tweets) {
        const newTweetElement = buildTweetView(tweet);
        tweetListElement.appendChild(newTweetElement)
    }
}
