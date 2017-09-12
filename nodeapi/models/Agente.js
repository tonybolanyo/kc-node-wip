"use strict";

const mongoose = require('mongoose');

// definir un esquema

const agenteSchema = mongoose.Schema({
    name: String,
    age: Number
});

// crear el modelo
const Agente = mongoose.model('Agente', agenteSchema);

// no es necesario exportar el modelo
// mongoose ya lo conoce
// pero si lo hecemos podemos importarlo sin necesidad de requerir mongoose
module.exports = Agente;