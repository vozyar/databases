var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  database: 'chat',
  host: 'localhost',
  password: '',
  user: 'root'
});

connection.connect(function(err) {
  if (err) {
    throw err;
  }
  console.log("Connected!");
});

module.exports = {
  connection: connection
};


