import { tweetListControler } from "./tweetListControler.js";

const tweetListElement = document.querySelector('.tweet-list');

// Cuando se pulse el botón
const loadTweetsButtonElement = document.querySelector("#loadTweetsButton");

loadTweetsButtonElement.addEventListener('click', () => {
    tweetListControler(tweetListElement);
});


