var express = require('express');
var router = express.Router();
const connection = require("./../bbdd");


/* GET pagina de contactos. */
router.get('/', function(req, res, next) {
  connection.query('select * from productos', function (error, results, fields) {
      if (error) throw error;
      res.render('acercade');
    });
});

module.exports = router;

