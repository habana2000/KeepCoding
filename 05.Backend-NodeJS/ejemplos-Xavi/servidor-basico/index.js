// cargar la libreria http
const http = require('http');
const Chance = require('chance')

const chance = new Chance();

// definir un servidor
const servidor = http.createServer(function(request,response) {
    response.writeHead(200,{'Content-type': 'text/html'});

    response.end(`Wake up, <b>${chance.name()}</b>`);
})

// arrancamos el servidor
servidor.listen(1337,'127.0.0.1'); // Puerto: 1337, 127.0.0.1: de peticiones que vienen de nuestro propio equipo

console.log('Servidor arrancado en http://127.0.0.1:1337')