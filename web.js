var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  //TODO improve file reading	
  fs.readFile("index.html", function (err,data) {
    if (err) {
    	response.writeHead(404);
    	response.end(JSON.stringify(err));
      return;
    }
    response.writeHead(200);
    response.end(data);
  });	
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
