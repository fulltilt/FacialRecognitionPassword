var express = require('express');
var fs = require('fs');
var path     = require('path');

//var app = express.createServer(express.logger());
var app = express();

var file = fs.readFileSync('index.html');

app.get('/', function(request, response) {
  response.send(file.toString());
});

app.use(express.static(path.join(__dirname, 'public')));

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});