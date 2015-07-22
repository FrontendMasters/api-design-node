var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html', function(err) {
    if (err) {
      res.status(500).send(err);
    }
  })
});


var port = 3000;
app.listen(port, function(){
  console.log('listening on http://localhost:', port);
});
