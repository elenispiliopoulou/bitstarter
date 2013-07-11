var express = require('express'),
  fs = require('fs');
var app = express.createServer(express.logger());

var content;

//fs.readFile('./index.html', function (err,data) {
//  if (err) {
 //     throw err;
 //  }   content = data;
  // return ;
//});

//console.log(content);
app.get('/', function(request, response) {
     
    fs.readFile('./index.html', function (err,data) {
       if (err) {
          throw err;
       }
        content = data;
        console.log(content);
       response.send(content);
    });
       response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
