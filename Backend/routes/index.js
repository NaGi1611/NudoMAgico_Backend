var express = require('express');
var router = express.Router();
const connection = require("./../bbdd");


/* GET home page. */
router.get('/', function(req, res, next) {
  connection.query('select * from productos', function (error, results, fields) {
    if (error) throw error;
    //res.json({data: results});
    res.render('index');
  });

});

module.exports = router;
