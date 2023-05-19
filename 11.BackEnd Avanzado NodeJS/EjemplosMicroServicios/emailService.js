'use strict'

const { Responder } = require('cote');
const nodemailer = require('nodemailer');

main().catch(err => console.log('Hubo un error ', err));

async function main () {
    const testAccount = await nodemailer.createTestAccount();

    const transport = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass
        }
    });

    const responder = new Responder({name: 'Servicio de mensajeria'});

    responder.on('enviar-email', async (req,done) => {
        try {
            const { from, to, subject, html} = req;
            
            const result = await transport. sendMail({from, to, subject, html});

            console.log(`EMail enviado: ${nodemailer.getTestMessageUrl(result)}`);

        } catch (err) {
            done({message: err.message})
        }
    });
}