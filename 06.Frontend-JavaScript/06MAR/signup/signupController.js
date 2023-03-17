import { createUser } from "./signup.js";

export function signupController (signupElement) {
    signupElement.addEventListener('submit', async (event) => {
        // para eliminar el funcionamiento por defeecto del submit
        // y que no salgan los parametros en la URL
        event.preventDefault(); 

        const emailElement = signupElement.querySelector('#username')
        const passwordElement = signupElement.querySelector('#password')
        const passwordConfirmElement = signupElement.querySelector('#password-confirm')
    
        if (isEmailValid(emailElement.value) && 
            ArePasswordsValid(passwordElement.value, passwordConfirmElement.value)) {
            // Crear usuario
            console.log('Datos correctos')
            try {
                await createUser(emailElement.value, passwordElement.value)
                signupElement.reset();
                alert('Se ha creado el usuario')
                // redirect
                window.location = '/'
            } catch (error) {
                alert('No se ha podido crear el usuario')
            }
        } else {
            console.log('Error en el forumlario')
            alert('error en el formulario')
        }
    })
}

function isEmailValid (email) {
    const mailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    
    return mailRegExp.test(email)
}

function ArePasswordsValid (password, passwordConfirm) {
    // Comprobar que las contraseñas sean iguales
        
    return password === passwordConfirm   
}

