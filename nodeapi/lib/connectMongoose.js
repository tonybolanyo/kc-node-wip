"use strict";

const mongoose = require("mongoose");

const conn = mongoose.connection;

conn.on('error', err => {
    console.error('Error de conexión', err);
    process.exit(1);
});

conn.once('open', () => {
    console.log('Conectado a mongodb');
});

// la cadena de conexión es como una URL, usando protocolo mongodb
mongoose.connect('mongodb://localhost/cursonode');

// no necesitamos exportar la conexión
// porque mongoose se encarga de mantenerla internamente
