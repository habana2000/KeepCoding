const suma = require('./suma')

describe ("Suma de valores positivos", () => {

    test('sumar 1 más 2 es igual a 3', () => {
        expect(suma(1,2)).toBe(3); 
    })
    
    test('sumar 11 más 22 es igual a 33', () => {
        expect(suma(11,22)).toBe(33); 
    })

});

describe ("Suma de valores negativos", () => {

    it('sumar -1 más -2 es igual a -3', () => {
        expect(suma(-1,-2)).toBe(-3); 
    });
    
    it('sumar -11 más -22 es igual a -33', () => {
        expect(suma(-11,-22)).toBe(-33); 
    });

});
