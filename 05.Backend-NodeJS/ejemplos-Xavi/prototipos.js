'use strict';

function Persona(nombre) {
    this.nombre = nombre;
}

const pepe = new Persona('Pepe');
const luis = new Persona('Luis');

// añadir propiedades al prototipo de las personas
Persona.prototype.saluda = function() { console.log('Hola, soy', this.nombre)};
pepe.saluda();
luis.saluda();

// herencia simple -----------------------

function Agente(nombre) {
    // heredar el constructor de las personas
    // llamar al constructor de las personas con mi this
    Persona.call(this, nombre);
}

// Heredar propiedades de las pesonas
Agente.prototype = Object.create(Persona.prototype);
Agente.prototype.constructor = Agente;

 const smith = new Agente('Smith');

 smith.saluda();

 // Herencia múltiple

 // Mixin
 function Superheroe() {
    this.vuela = function() { console.log(this.nombre, 'vuela')};
 }

 // copiar todas las propiedades de los superhéroes al prototipo del Agente
 Object.assign(Agente.prototype, new Superheroe());  // en lugar de "new Superheroe()" puedes poner "Object.create(Superheroe.prototype)"

 smith.vuela();

 console.log(smith);
 console.log(Agente.prototype);
 console.log(Persona.prototype);
