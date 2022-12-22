
const team = "Argentina"

if (true) {
    const team = "France"
    console.log("(dentro del bloque) The team is",team)
}

console.log("The team is",team)

// Si me interesa alterar la variable, dentro del bloque no redefino la variable
let pinguino2 = 'Pingu'
if (true) {
    pinguino2 = 'Madagascar'
    console.log(pinguino2) // Nos saca por consola Madagascar
}
console.log(pinguino2) // Nos saca por consola Madagascar

// Si NO me interesa alterar la variable, dentro del bloque redefino la variable (con let o const)
let pinguino = 'Pingu'
if (true) {
    let pinguino = 'Madagascar'
    console.log(pinguino) // Nos saca por consola Madagascar
}
console.log(pinguino) // Nos saca por consola Pingu

