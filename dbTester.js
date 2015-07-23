var mongoose = require('mongoose');

// connect to a database so the below will work.
// what's happening is that we're querying yor mongo db
// on the todos collection and
// logging the results. The todos collection
// will be created for you so no need to make that.
// So in the mongo shell in the terminal,
// or in here if you're feeling ambitions,
// you need to add some documents
// to the todos collection.
// run node server/db.Tester to execute this file
// MAKE SURE MONGOD is RUNNING

var TodoSchema = new mongoose.Schema({});

var Todo = mongoose.model('todo', TodoSchema);

Todo.find({}, function(err, todos) {
  console.log(err, todos);
});
