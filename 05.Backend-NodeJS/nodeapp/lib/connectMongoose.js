const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

mongoose.connection.on('error', err => {
    console.log('Error de conexión', err);
});

mongoose.connection.once('open', () => {
    console.log('Conectado a MongoDB en', mongoose.connection.name);
})

mongoose.connect('mongodb://127.0.0.1:27017/cursonode');

module.exports = mongoose.connection;

