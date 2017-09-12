"use strict";

const express = require('express');
const router = express.Router();

// forma 1 de acceder al modelo Agente:
// pedírselo a mongoose
//const mongoose = require('mongoose');
//const Agente = mongoose.model('Agente');
// forma 2: si lo exportamos
const Agente = require('../../models/Agente');

router.get('/', (req, res, next) => {
    // recuperar una lista de agentes
    Agente.find({}, (err, listaAgentes) => {
        if (err) {
            console.error('Error', err);
            next(err);  // para que retorne la página de error
            // y paramos la ejecución de la petición
            return;
        }
        res.json({ success: true, rows: listaAgentes });
    });
});

module.exports = router;