'use strict';

const express = require('express');
const router = express.Router();
const Agente = require('../../models/Agente');

// GET /api/agentes
// Devuelve una lista de agentes

router.get('/', async (req,res,next) => {
    try {
        // Filtros
        const filterByName = req.query.name;
        // Paginación
        const skip = req.query.skip;
        const limit = req.query.limit;
        // Ordenar
        const sort = req.query.sort;
        // Seleccion de campos
        const fields = req.query.fields

        const filtro = {};
        if (filterByName) {
            filtro.neme = filterByName;
        };
        const agentes =  await Agente.lista(filtro,skip,limit,sort,fields);
        res.json({results: agentes});

    } catch (error) {
        next(error)
    }
});

module.exports = router;


// GET /api/agentes/{_id}
// Devuelve un agente buscando por _id

router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const agente = await Agente.findById(id);

        if (!agente) {
            next(new Error('Error porque no existe'))
        } 
        agente.saluda();
        res.json({result: agente});

    } catch (error) {
        next(error)
    }
});

// PUT /api/agentes/{_id) (body)
// Actualizar un agente

router.put('/:id',async (req,res,next) => {
    try {
        const id = req.params.id;
        const data = req.body;

        const agenteActualizado = await Agente.findByIdAndUpdate(id,data,{
            new : true
        });
        res.json({result:agenteActualizado});
    } catch (error) {
        next(error)
    }

});

// POST /api/agentes (body)
// Crea un agente nuevo en la base de datos

router.post('/', async (req,res,next) => {
    try {
        const data = req.body;
        
        // creamos una instancia de Agente, y después la rellenamos
        const agente = new Agente(data);

        // la persistimos en la base de datos
        const agenteGuardado = await agente.save();
        res.json({result:agenteGuardado});

    } catch (error) {
        next(error)
    }
})

// DELETE 
// PUT /api/agentes/

router.delete('/:id', async (req,res,next) => {
    try {
        const id = req.params.id;

        const agenteEliminado = await Agente.findByIdAndDelete(id);
        res.json({result: agenteEliminado});

    } catch (error) {
        next(error)
    }
});