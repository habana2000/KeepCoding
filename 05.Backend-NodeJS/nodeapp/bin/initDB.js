'use strict';

const Agente = require ('../models/Agente');
const connection = require('../lib/connectMongoose');

main().catch(err => console.log('Hubo un error',err));

async function main() {
    
    // Inicializamos colección de agentes
    await initAgentes();

    connection.close();

};

async function initAgentes() {
    // borrar todos los docuemntos de la colección de agentes
    const deleted = await Agente.deleteMany();
    console.log(`Eliminados ${deleted.length} agentes`);

    // Crear agentes iniciales
    const inserted = await Agente.insertMany([
        {neme: 'Xavi', age: 56},
        {neme: 'Cristina', age: 58},
        {neme: 'Mireia', age: 31}
    ]);
    console.log(`Creados ${inserted.length} agentes`);

};