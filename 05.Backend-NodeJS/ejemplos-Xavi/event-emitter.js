'use strict';

const EventEmiter = require('events');

const emisor = new EventEmiter();

emisor.on('llamada de telefono', function(quienLlama) {
    if (quienLlama === 'madre') {
        return;
    }
    console.log('ring ring');
});

emisor.once('llamada de telefono', function(quienLlama) {
    console.log('brr brr');
});

emisor.emit('llamada de telefono','madre');
emisor.emit('llamada de telefono','madre');
emisor.emit('llamada de telefono','madre');
emisor.emit('llamada de telefono','madre');
