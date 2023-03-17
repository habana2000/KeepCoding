// Obtener el array de tweets
import { tweets } from "./tweets.js";

// Generar el HTML de que representara el tweet
const tweetListElement = document.querySelector('.tweet-list');

for (const tweet of tweets) {
    const newTweetElement = document.createElement('article');
    newTweetElement.innerHTML = `
        <p>${tweet.handler}</p>
        <p>${tweet.body} - ${tweet.date}</p>
    `;
    // Añadirlo al DOM
    tweetListElement.appendChild(newTweetElement)
}
