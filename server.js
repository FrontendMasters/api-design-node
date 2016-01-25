// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data

var fs = require('fs');
var express = require('express');
var _ = require('lodash');
var morgan = require('morgan');

var jsonData = {count: 12, message: 'hey'};

var app = express();

app.get('/', function(req, res) {
  // Send file requires absolute path
  res.sendFile(__dirname + '/index.html', function (err) {
    if (err) { res.send(500).send(err); }
  });

  // Alternative - read the file separately
  /*  fs.readFile('index.html', function (err, data) {
   *  if (err) throw err;
   *
   *  var html = data.toString();
   *  res.setHeader('Content-Type', 'text/html');
   *  res.send(html);
   * });
   */
});

app.get('/data', function(req, res){
  return res.json(jsonData);
});


var port = 3000;
app.listen(port, function () {
  console.log('Server is listening on port:', port);
});
