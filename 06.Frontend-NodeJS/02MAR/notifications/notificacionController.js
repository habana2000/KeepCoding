import { buildNotificationView } from "./notificationView.js";

export function notificationController(notificationsElement) {
    
    function showMessage(message) {
        notificationsElement.innerHTML = buildNotificationView(message);
        setTimeout(() => {
            notificationsElement.innerHTML = '';
        }, 5000);
    }

    // para que se pueda utilizar desde fuera
    return showMessage;

}
