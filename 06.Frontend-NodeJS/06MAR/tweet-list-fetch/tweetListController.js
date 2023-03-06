import { getTweets } from "./tweets.js";
import { buildTweetView, buildSpinnerView, buildErrorLoadingTweets, buildEmptyTweetList } from "./tweetView.js";

export async function tweetListController(tweetListElement) { 
    
    // mostrar ruleta
    tweetListElement.innerHTML = buildSpinnerView();

    let tweets = [];

    try {
        tweets = await getTweets();
        // showMessage('Los Tweets se cargaron correctamente');
        //showMessage('Los tweets se han cargado correctamente');
        dispatchCustomerEvent('Tweets cargados correctamente', tweetListElement);

        if (tweets.length > 0) {
            drawTweets(tweets,tweetListElement);
        } else {
            // showEmptyMessage(tweetListElement);
            dispatchCustomerEvent('No hay tweets a cargar', tweetListElement);
        }

    } catch (error) {
        // gestión del error
        // tweetListElement.innerHTML = buildErrorLoadingTweets();
        dispatchCustomerEvent('Error al cargar los tweets', tweetListElement);
        
    } finally {
        // Se debe poner aquí porque hay un await, entonces esta zona se ejecuta después del await
        hideSpinner(tweetListElement);
    }

}

function hideSpinner(tweetListElement) {
    const spinnerElement = tweetListElement.querySelector('.spinner');
    spinnerElement.classList.add('hide');
}

function drawTweets(tweets,tweetListElement) {
    for (const tweet of tweets) {
        const newTweetElement = buildTweetView(tweet);
        tweetListElement.appendChild(newTweetElement) // NOTA: Pintar todos los tweets a la vez
     }
}

function showEmptyMessage(tweetListElement) {
    tweetListElement.innerHTML = buildEmptyTweetList();
}

function dispatchCustomerEvent(message, tweetListElement) {
    const event = new CustomEvent('newNotification', {
        detail: {
            message: message
        }
    });
    tweetListElement.dispatchEvent(event);
}


