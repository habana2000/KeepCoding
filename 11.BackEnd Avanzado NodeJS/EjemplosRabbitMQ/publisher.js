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
    await canal.assertQueue(COLA,{
        durable: true
    })

    let keepSending = true;

    // publicar mensajes
    while(true) {

        const mensaje = {
            trabajo: 'enviar un email ' + Date.now()
        }
        
        // verifico si puedo enviar más
        if (!keepSending) {
            //espero un poco antes de enviar el siguiente
            console.log('Buffer lleno, espero un poco');
            await new Promise (resolve => canal.on('drain', resolve));
        } 
            
        keepSending = canal.sendToQueue(COLA, Buffer.from(JSON.stringify(mensaje)), {
                persistent: true
        });
            
        console.log('Mensaje publicado ' + Date.now());
        
        // await sleep(1);
    }

}