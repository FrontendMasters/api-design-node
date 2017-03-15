var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');
var morgan = require('morgan');

var lions = [];
var id = 0;

let findItem = (dataSet, property) => {
  dataSet.find(item => {
    item.property = req.params.property;
  });
}

var updateId = function(req, res, next) {
  id++;
  req.body.id = id + '';
  next();
};

app.use(morgan('dev'))
app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.param('id', function(req, res, next, id) {
  let lion = findItem(lions, id);
  req.lion = lion;
  next();
});

app.get('/lions', function(req, res){
  res.json(lions);
});

app.get('/lions/:id', function(req, res){
  lion = req.lion;
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

app.use((err, req, res, next) => {
  if(err){
    res.status(500).send(err);
  }
})

app.listen(3000);
console.log('on port 3000');
