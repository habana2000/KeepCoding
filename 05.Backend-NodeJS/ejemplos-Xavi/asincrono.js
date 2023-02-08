'use strict';

const { SlowBuffer } = require("buffer");

function escribeTras2Segundos(texto,callback) {
    setTimeout(() => {
        console.log(texto);
        callback();
    },1000)
}

console.log('inicio');

/*
escribeTras2Segundos('texto1', () => {
    escribeTras2Segundos('texto2', () => {
        console.log('fin');
    });
});
*/


// Bucle para n veces
/*
function serie (n, fn, callback) {
    if (n==0) {
        callback();
        return;
    }
    fn ('texto ' + n, () => {
        serie(n-1,fn,callback)
    })
}

serie(5, escribeTras2Segundos, () => {
    console.log('fin')
})
*/

// Bucle con array

function serie (array, fn, callback) {
    if (array.length == 0) {
        callback();
        return;
    }
    fn ('texto ' + array.shift(), () => {
        serie(array,fn,callback)
    })
}

serie(['uno','dos','tres','cuatro','cinco'], escribeTras2Segundos, () => {
    console.log('fin')
})
