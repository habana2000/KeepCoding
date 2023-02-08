'use strict';

function creaSumador(numero) {
    // este contexto es accesible SIEMPRE
    // por la función que esatmos devolviendo
    return function(otroNumero) {
        return numero + otroNumero;
    }
}

const sumaSiete = creaSumador(7);

console.log(sumaSiete(10));

function creaVehiculo(nombre) {
    return {
        getNombre: function() { return nombre},
        setNombre: function(valor) { nombre = valor },
        saluda: function() { console.log('Hiola, soy', nombre)}
    }
}

const coche = creaVehiculo('Seat');

coche.saluda();
coche.setNombre('Ford');
coche.saluda();

setTimeout(coche.saluda,1000);