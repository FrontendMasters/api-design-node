var _ = require('lodash');
var lionRouter = require('express').Router();

var lions = [];
var id = 0;

var updateId = function(req, res, next) {
  if (!req.body.id) {
    id++;
    req.body.id = id + '';
  }
  next();
};

lionRouter.param('id', function(req, res, next, id) {
  var lion = _.find(lions, {id: id})

  if (lion) {
    req.lion = lion;
    next();
  } else {
    res.send();
  }
});

lionRouter.get('/', function(req, res){
  res.json(lions);
});

lionRouter.get('/:id', function(req, res){
  var lion = req.lion;
  res.json(lion || {});
});

lionRouter.post('/', updateId, function(req, res) {
  var lion = req.body;

  lions.push(lion);

  res.json(lion);
});

lionRouter.delete('/:id', function(req, res) {
  var lion = _.findIndex(lions, {id: req.params.id});
  lions.splice(lion, 1);

  res.json(req.lion);
});

lionRouter.put('/:id', function(req, res) {
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

module.exports = lionRouter;
