import { decodeToken } from "../utils/decodeToken.js"
import { buildGreeting } from "./UserActionsView.js"

export function userActionsController (userActionsElement) {
    const jwt = localStorage.getItem('jwt')

    if (jwt) {
        // borrar links de Login y SignUp
        const loginLinkElement = userActionsElement.querySelector('#loginLink')
        const signupLinkElement = userActionsElement.querySelector('#signupLink')
        loginLinkElement.remove()
        signupLinkElement.remove()

        const payload = decodeToken(jwt)
        userActionsElement.appendChild (buildGreeting(payload.username))

    } else {
        //b Borrar el link de crear tweet
        const createTweetLinkElement = userActionsElement.querySelector('#createTweetLink')
        createTweetLinkElement.remove()
    }


}