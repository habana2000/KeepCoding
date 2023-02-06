'use strict';

// crear una función para usarla como constructor de objetos
function fruta(nombre) {
    this.nombre = nombre;    
    this.saluda = function() {
        console.log('Hola soy', this.nombre)
    }
}

const limon = new fruta('limon');

console.log(limon);

limon.saluda();