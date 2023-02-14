const mongoose = require('mongoose');

// definir el esquema de los agentes
const agenteSchema = mongoose.Schema({
    neme: String,
    age: Number  
})

// cear el modelo de Agente
const Agente = mongoose.model('Agente', agenteSchema);

// exportar modelo Agente
module.exports = Agente;

