'use strict'

console.log('Hola, este es el fichero index.js');

const intervalId = window.setInterval(() => {
    console.log('ejecución desde setInterval')
}, 2500);

window.setTimeout(() => {
    window.clearInterval(intervalId);
}, 2500);

// Crear elementos

const intervalId2 = window.setInterval(() => {
    // creamos un nuevo li
    const newListElement = document.createElement('li');
    newListElement.textContent = 'Nuevo elemento' + (new Date).toString();
    const elementoPadre = document.querySelector('.lista');
    elementoPadre.appendChild(newListElement);
}, 2500);

window.setTimeout(() => {
    window.clearInterval(intervalId2);
}, 3000);