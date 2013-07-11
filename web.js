var express = require('express'),
  fs = require('fs');
var app = express.createServer(express.logger());

var content;

app.get('/', function(request, response) {
    s.readFile('./index.html', function (err,data) {
       if (err) {
          throw err;
       }
       response.send(data);
    });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
