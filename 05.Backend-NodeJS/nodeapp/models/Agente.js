const mongoose = require('mongoose');

// definir el esquema de los agentes
const agenteSchema = mongoose.Schema({
    neme: String,
    age: Number  ,
    email: String
})

// Tipos de método: 
// - Agente.createWithColor('red') --> Método estático (a la clase) .... 
// - agente.sendEmail({subject:"Título"}) ---> Método de instancia --> NO USAR arrow functions

agenteSchema.statics.lista = function(filtro,skip,limit,sort,fields) {
    const query = Agente.find(filtro);
    query.skip(skip);
    query.limit(limit);
    query.sort(sort);
    query.select(fields);
    return query.exec()
};

agenteSchema.methods.saluda = function() {
    console.log('Hola, soy el agente', this.neme);
};

// cear el modelo de Agente
const Agente = mongoose.model('Agente', agenteSchema);

// exportar modelo Agente
module.exports = Agente;

