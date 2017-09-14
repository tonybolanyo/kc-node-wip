"use strict";

// función que retorna una promesa
function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

const promesa = sleep(2000);

console.log(promesa);

promesa.then(() => {
    // la promesa se ha cumplido, ha acabado bien
    console.log('cumplido');
}).catch((err) => {
    // la promesa ha fallado
    console.error('Error', err);
});