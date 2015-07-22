// TODO: user app.params to find the lion using the id
// and then attach the lion to the req object and call next. Then in
// '/lion/:id' just send back req.lion

// create a middleware function to catch and handle errors, register it
// as the last middleware on app


// create a route middleware for POST /lions that will increment and
// add an id to the incoming new lion object on req.body

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');
var morgan = require('morgan');

var lions = [];
var id = 0;

var updateId = function(req, res, next) {
  // fill this out. this is the route middleware for the ids
};

app.use(morgan('dev'))
app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.param('id', function(req, res, next, id) {
  // fill this out to find the lion based off the id
  // and attach it to req.lion. Rember to call next()
});

app.get('/lions', function(req, res){
  res.json(lions);
});

app.get('/lions/:id', function(req, res){
  // use req.lion
  res.json(lion || {});
});

app.post('/lions', updateId, function(req, res) {
  var lion = req.body;

  lions.push(lion);

  res.json(lion);
});


app.put('/lions/:id', function(req, res) {
  var update = req.body;
  if (update.id) {
    delete update.id
  }

  var lion = _.findIndex(lions, {id: req.params.id});
  if (!lions[lion]) {
    res.send();
  } else {
    var updatedLion = _.assign(lions[lion], update);
    res.json(updatedLion);
  }
});

app.listen(3000);
console.log('on port 3000');
