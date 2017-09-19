var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  database: 'chat',
  // host: 'localhost',
  password: 'plantlife',
  user: 'root'
});

connection.connect();

module.exports = connection;


