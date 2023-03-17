export async function createUser(username,password) {
    // Construir un objeto con eMail y password
    const user = {
        username: username,
        password: password
    }

    // Consumir el api de sparrest, utilizando un POST y enviando los datos introducidos por elusuario
    const response = await fetch('http://127.0.0.1:8000/auth/register', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            "Content-type": "application/json"
        }
    })

    if (!response.ok) {
        throw new Error('Error al crear el usario')
    }


    // Gestionar la respuesta
}