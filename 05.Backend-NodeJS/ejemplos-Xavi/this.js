'use strict';

function fruta(nombre) {
    this.nombre = nombre;    
    this.saluda = function() {
        console.log('Hola soy', this.nombre)
    }
}

const limon = new fruta('limon');

// llamada normal
limon.saluda();

// en cambio aqui da undefined
setTimeout(limon.saluda,1000);

// bind sirve para asignar el this a esa función, y resolver el undefined
setTimeout(limon.saluda.bind(limon),1000);


// ----------------------------------------

console.log('*************** CALL');

// unaFuncion();
const unaFuncion = limon.saluda;
unaFuncion.call(limon);