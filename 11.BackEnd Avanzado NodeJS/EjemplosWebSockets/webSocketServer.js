const socketio = require('socket.io');

module.exports = (server) => {
    const io = socketio(server);

    // ante cada conexion
    io.on('connection', socket => {
        console.log('Nueva conexión con el ID ', socket.id);

        socket.on('nuevo-mensaje', texto => {
            console.log('Mensaje recibido: ', texto);
            io.emit('mensaje-desde-servidor',texto);
        });


    });

    // simular un servicio de noticias
    setInterval(() => {
    io.emit('noticia', 'Noticia número ' + Date.now())
    },20000)    
}