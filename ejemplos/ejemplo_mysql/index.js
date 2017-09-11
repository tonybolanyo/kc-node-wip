"use strict";

// carga el driver de mysql
const mysql = require("mysql");

// crea una conexión al servidor
const connection = mysql.createConnection({
    host: 'didimo.es',
    user: 'usuariocurso',
    password: 'us3r',
    database: 'cursonode'
});

// abre la conexión
connection.connect((err) => {
    if (err) {
        console.error("Ha ocurrido un error", err);
        process.exit(1);
    }
});

// realiza una consulta
connection.query('SELECT * from agentes', function(err, rows, fields) {
    if (err) {
        console.error("Ha ocurrido un error", err);
        process.exit(1);
    }
    // muestra los resultados
    for (let i = 0; i < rows.length; i++) {
        const agente = rows[i];
        console.log(agente.idagentes, agente.name, agente.age);
    }

    connection.end();
});
