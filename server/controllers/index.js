var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) { // a function which handles a get request for all messages for the client
      console.log('got here');
      var messages = models.messages.get();
      res.end(JSON.stringify(messages)); //does this work? Or do I need to write the headers as well?
    }, 
    post: function (req, res) { // a function which handles posting a message to the database
      res.statusCode = 201;
      var messageData = [];
      req.on('data', (chunk) => {
        messageData.push(chunk);
      });
      req.on('end', () => {
        messageData = [].concat(messageData).toString('utf8');
        var parsedMessage = JSON.parse(messageData);
        //send to models?
        models.messages.post(parsedMessage);
        
      });
      res.end(); //does this work? Or do I need to write the headers as well?
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

