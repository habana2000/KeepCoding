'use strict';

// funcion que devuelve una promesa
function sleep(ms) {
    return new Promise( (resolve,reject) => {
        setTimeout( () => { 
//            if (true) {
//                reject(new Error('fatal'));
//            }
            resolve(54);
    }, ms);
    })
};

async function main() {

    const resultado = await sleep(2000);  //top level await ----> Se permita solo con TYPE = "module" en el package.json

    console.log(resultado);
    
}

main()