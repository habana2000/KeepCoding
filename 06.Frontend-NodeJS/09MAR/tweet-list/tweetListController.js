import { pubSub } from "../pubSub.js";
import { getTweets } from "./tweets.js";
import { buildTweetView, buildSpinnerView, buildErrorLoadingTweets, buildEmptyTweetList } from "./tweetView.js";

export async function tweetListController(tweetListElement) {
  tweetListElement.innerHTML = buildSpinnerView();
  let tweets = [];

  try {
    tweets = await getTweets()
    // showMessage('Los tweets se cargaron correctamente')
    // dispatchCustomEvent('Los tweets se cargaron correctamente', tweetListElement)
    pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Los tweets se cargaron correctamente')

    
    if (tweets.length > 0) {
      drawTweets(tweets, tweetListElement);
    } else {
      showEmptyMessage(tweetListElement);
    }

  } catch (error) {
    // tweetListElement.innerHTML = buildErrorLoadingTweets();
    // showMessage('No hemos podido cargar los tweets')
    // dispatchCustomEvent('No hemos podido cargar los tweets', tweetListElement)
    pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'No hemos podido cargar los tweets')
  } finally {
    hideSpinner(tweetListElement)
  }

}

function hideSpinner(tweetListElement) {
  const spinnerElement = tweetListElement.querySelector('.spinner');
  spinnerElement.classList.add('hide');

  // tweetListElement.innerHTML = '';
}

function drawTweets(tweets, tweetListElement) {
  for (const tweet of tweets) {
    const newTweetElement = buildTweetView(tweet);
    tweetListElement.appendChild(newTweetElement)
  }
}

function showEmptyMessage(tweetListElement) {
  tweetListElement.innerHTML = buildEmptyTweetList();
}
