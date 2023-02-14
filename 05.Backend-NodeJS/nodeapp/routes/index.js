var express = require('express');
var router = express.Router();

const Agente = require('../models/Agente');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const agentes =  Agente.find();
// console.log(agentes);


module.exports = router;
