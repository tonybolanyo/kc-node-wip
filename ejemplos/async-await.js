"use strict";

// función que retorna una promesa
function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms / 1000);
        }, ms);
    });
}

async function main() {
    const resultado = await sleep(3000);
    console.log("Han pasado " + resultado + " segundos");
}

main();