// TODO: make this work.
// if yuo go to localhost:3000 the app
// there is expected crud to be working here
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');
const { lowerCase } = require('lodash');
let handlebars = require('handlebars');
var exphbs = require('express-handlebars')
// express.static will serve everything
// with in client as a static resource
// also, it will server the index.html on the
// root of that directory on a GET to '/'
app.use(express.static('client'));

// body parser makes it possible to post JSON to the server
// we can accss data we post on as req.body
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
 app.set('view engine', 'handlebars');

 let lionsObj = [{name:"leo", pride: "caucasian",  age: 4 ,gender:"male" ,id:1},
 {name:"ninja", pride: "jappyh", age: 3 ,gender:"female" ,id:2},
 {name:"manda", pride: "northend", age: 9 ,gender:"female" ,id:3},
 {name:"simba", pride: "frica", age: 4 , gender:"male" ,id:4}];
  var currentId = lionsObj.length;


// TODO: make the REST routes to perform CRUD on lions

// app.get("/lions", function(req,res){
// res.render (lions)
// });

app.get("/lions", function(req,res){
    
    res.json(lionsObj)
    });


app.get("/lions/:id", function(req,res){
    let id = req.params.id
    console.log({id})
    let lionDetails = lionsObj.find(lion => ":" + lion.id  == id);

    res.json(lionDetails||"none existant entry")
    });

    app.post("/lions", function(req,res){
        let newLionName = req.body.name;
        let newLionPride = req.body.pride;
        let newLionAge = req.body.age;
        let newLionGender = req.body.gender;
        let newId = currentId + 1
        console.log({newId});

        let newLion = {name : newLionName, pride: newLionPride, age: newLionAge, gender : newLionGender, id : newId}
        let lionDetails = lionsObj.push(newLion);
    console.log({newLion})
        res.json (lionDetails)
        });


        app.delete("/lions/:id", function(req,res){
            let delLion = req.body.delete
            console.log({delLion});
            if (delLion){
                let id = req.params.id
                console.log({id})
                let lionDetails = lionsObj.find(lion => lion.id == id);
                let deleteLion = lionsObj.delete[lionDetails]
            deleteLion;}
            
            res.json(lionDetails)
            });



app.listen(3000);
console.log('on port 3000');
