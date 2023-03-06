import { pubSub } from "../pubSub.js";
import { buildNotificationView } from "./notificationView.js";

export function notificationController(notificationsElement) {
    
    function showMessage(message) {
        notificationsElement.innerHTML = buildNotificationView(message);
        setTimeout(() => {
            notificationsElement.innerHTML = '';
        }, 5000);
    }

    pubSub.subscribe(pubSub.TOPIC.NOTIFICATION, () ==> {
        showMessage()
    })

    // para que se pueda utilizar desde fuera
    return showMessage;
}




