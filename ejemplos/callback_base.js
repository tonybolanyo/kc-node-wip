"use strict";

function suma(a, b, callback) {
    //const resultado = a + b;

    setTimeout(() => {
        const resultado = a + b;
        console.log("llamando al callback");
        callback(resultado);
        console.log("fin del setTimeout");
    }, 1000);

    console.log("fin de la función");
}
console.log("antes de la suma");
suma(2, 7, console.log);
console.log("después de la suma");