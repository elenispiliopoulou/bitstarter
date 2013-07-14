var express = require('express'),
  fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    fs.readFile('./index.html', function (err,data) {
       if (err) {
          throw err;
       }
//       response.writeHead(200, {"Content-Type": "text/plain"});
       response.write(data);
 //      response.end();
  //     response.send(data);
       return;
    });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
