'use strict';

console.group('Inicializo la calculadora');

module.exports = {
    suma: (a,b) => a + b,
    resta: (a,b) => a - b,
}

// "exports" es un alias de "module.exports"
/* Se podria poner asi

exports.suma = (a,b) => a + b;
exports.resta = (a,b) => a - b;

*/