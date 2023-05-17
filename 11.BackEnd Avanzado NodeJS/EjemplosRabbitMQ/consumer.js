'use strict';

const COLA = 'tareas';

const amqplib = require('amqplib');

main().catch(err => console.log('Hubo un error',err));

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function main() {

    // conectar al servicio de RabbitMQ
    const connection = await amqplib.connect('amqps://obdmzflb:M7chkXsYzqHjqfVOYMYFGnfkAX42_Oiw@whale.rmq.cloudamqp.com/obdmzflb');

    // crear un canal
    const canal = await connection.createChannel();

    // asegurar que existe una cola
    await canal.assertQueue(COLA,{})

    canal.prefetch(100);

    // consumir los mensajes de la cola
    canal.consume(COLA, async mensaje => {
        const payload = mensaje.content.toString();

        // simula que hacemos el trabajo que nos piden
        console.log(payload);

        canal.ack(mensaje);
        await sleep(300)

    }) 

}    