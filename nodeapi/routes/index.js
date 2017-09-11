var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const segundo = new Date().getSeconds();

  res.render('index', {
    title: 'Express',
    valor: '<script>alert("envía 1 bitcoin a ... para limpiar tu navegador");</script>',
    condicion: {
      segundo: segundo,
      estado: segundo % 2 === 0
    },
    users: [
      { name: 'Jones', age: 29},
      { name: 'Smith', age: 48},
      { name: 'Brown', age: 33}
    ]
  });
});

module.exports = router;
