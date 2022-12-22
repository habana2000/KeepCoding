function caminar() {
    console.log('Caminando')
}

function comer(hora,comida) {
    comida(hora)
}

function desayuno(hora) {
    console.log(`${hora}: Desayuno`)
}

function almuerzo(hora) {
    console.log(`${hora}: Almuerzo`)
}

function serHobbit() {
    comer('07AM', desayuno)
    caminar()
    caminar()
    comer('10AM', almuerzo)
    caminar()
}

result = serHobbit()

// Otro ejemplo

const legolas = {
    name: 'legolas',
    attackSpeed: 20,
    attackDamage: 10
}

function attackWithAxe(person) {
    return {
        wepon: 'Axe',
        damage: person.attackDamage + 30,
        speed: person.attackSpeed + 9
    }
}

function atacar (personaje, callback) {
    let attack = callback(personaje)
    console.log (
        `${personaje.name} ataca con ataque ${attack.weapon} causando ${attack.damage} a velocidad ${attack.speed}`

    )
}

result = atacar(legolas, attackWithAxe)

