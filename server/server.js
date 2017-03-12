// TODO: make this work.
// if yuo go to localhost:3000 the app
// there is expected crud to be working here

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');

// express.static will serve everything
// with in client as a static resource
// also, it will server the index.html on the
// root of that directory on a GET to '/'
app.use(express.static('client'));

// body parser makes it possible to post JSON to the server
// we can accss data we post on as req.body
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var lions = [];
var id = 0;

let findItem = (dataSet, property) => {
  for(let i=0; i<dataSet.length; i++){
    if(dataset[i].property === req.params.property) return dataSet[i];
  }
}

app.get('/lions', (req, res) => {
  res.send(lions);
});

app.get('/lions/:id', (req, res) => {
  let lion = findItem(lions, 'id');
  res.send(lion || undefined);
})

app.post('/lions', (req, res) => {
  let lion = req.body;
  lion.id = Date.now();
  lions.push(lion);
  res.send(lion);
});

// check to see if the below method works - it might not be updating in the array
app.put('/lions/:id', (req, res) => {
  let update = req.body;
  let lion = findItem(lions, 'id');
  let updatedLion = Object.assign(lion, update);
  res.send(updatedLion)
});

app.delete('/lions/:id', (req, res) => {
  for(let i=0; i<lions.length; i++){
    if (lions[i].id === req.params.id){
      let lion = lions[i];
      lions.splice(i, 1);
      res.send(lion);
    };
  };
});

app.listen(3000);
console.log('on port 3000');
