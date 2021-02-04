// create a middleware function to catch and handle errors, register it
// as the last middleware on app



var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');
var morgan = require('morgan');

var lions = [{name: "mimi", pride: "wakanda", age: 3, gender: "male"}];
var id = 0;

var updateId = function(req, res, next) {
  // fill this out. this is the route middleware for the ids
  id = id++
  next(id);
};

app.use(morgan('dev'))
app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.param('id', function(req, res, next, id) {
  // fill this out to find the lion based off the id
  // and attach it to req.lion. Rember to call next()
 lion = id;
 
 console.log({lion})
  next();
});

app.get('/lions', function(req, res){
  res.json(lions);
});

app.get('/lions/:id', function(req, res){
    req.lion 
    let theLion = lions[lion];
    console.log({theLion});
  res.json(theLion || {});
});

app.post('/lions', updateId, function(req, res) {
  var lion = req.body;
console.log({lion})
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


function errors (err,req,res,next){
     req.err(console.log("error message"))
     next();
 };

app.listen(3000);
console.log('on port 3000');
