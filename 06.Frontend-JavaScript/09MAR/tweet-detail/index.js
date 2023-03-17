import { tweetDetailController } from "./tweetDetailController.js";

// leer de la url el id del tweet
const params = new URLSearchParams(window.location.search)
const tweetId = params.get('tweetId');

// si el queryparam no existe, haremos una redirección al listado de tweets
if (!tweetId) {
  window.location = '/'
} else {
  // crearemos un controlador donde le pasaremos dicho id
  const tweetDetailElement = document.querySelector('.tweet-detail');

  tweetDetailController(tweetDetailElement, tweetId)
}

