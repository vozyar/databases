var db = require('../db');

module.exports = {
  messages: {
    get: function () { // a function which produces all the messages
      //access the messages table
      var query = db.connection.query('SELECT * FROM messages');
      
      query.on('error', function(err) {
        throw err;
      });

      query.on('fields', function(fields) {
        console.log(fields);
      });

      query.on('result', function(row) {
        console.log(row);
      });
    }, 
    post: function (message) { // a function which can be used to insert a message into the database
      var sql = "INSERT INTO messages (id, text, user, postdate roomname) VALUE ?";
      // var value = [[]]
    } 
  },

  users: {
    // Ditto as above.
    get: function (response, request) {
    
    },
    post: function () {

    }
  }
};

