var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Petty1611',
  database : 'nudomagico',
});

connection.connect();

module.exports = connection;