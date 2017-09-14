"use strict";

const request = require('request');

request({
    url: 'https://swapi.co/api/starships/',
    json: true
}, (err, res, body) => {
    if (err || res.statusCode >= 400) {
        console.error('Error', err);
        return;
    }
    console.log(body);
});