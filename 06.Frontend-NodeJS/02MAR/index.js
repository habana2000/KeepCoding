import { tweetListController } from "./tweet-list-fetch/tweetListController.js";
import { notificationController } from "./notifications/notificacionController.js";

const tweetListElement = document.querySelector('.tweet-list');
const notificationsElement = document.querySelector('.notifications');

const showMessage = notificationController(notificationsElement);
tweetListController(tweetListElement);

tweetListElement.addEventListener('newNotification', (event) => {
    showMessage(event.detail.message);
});    


