import { notificationController } from "./notifications/notificationController.js"
import { tweetListController } from "./tweet-list/tweetListController.js"
import { userActionsController } from "./user-actions/userActionsController.js"


const tweetListElement = document.querySelector('.tweet-list')
const notificationsElement = document.querySelector('.notifications')
const userActionsElement = document.querySelector('.user-actions')

notificationController(notificationsElement)
tweetListController(tweetListElement)
userActionsController(userActionsElement)

