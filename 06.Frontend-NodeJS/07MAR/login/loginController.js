import { isEmailValid } from "../utils/isEmailValid.js";
import { loginUser } from "./login.js";
import { pubSub } from "../pubSub.js";

export function loginController(loginElement) {

    loginElement.addEventListener('submit', (event) => {
        event.preventDefault();

        const emailElement = loginElement.querySelector('#username');          

        if (!isEmailValid(emailElement.value)) {
            // mostraremos notificaciones
            // alert('eMail inválido');
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION,'email invalido')
        } else {
            // Autenticamos el usuario
            logUser(loginElement);
        }
    })

    async function logUser(loginElement) {
        const formData = new FormData(loginElement);
        const username = formData.get('username');
        const password = formData.get('password');

        try {
            const jwt = await loginUser(username,password);
            // Guardar el token en localstorage
            localStorage.setItem('jwt',jwt)
            // lo llevamos a la pagina de tweets
            window.location = './index.html';
        } catch (error) {
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION,error.message)
        }
    }
}