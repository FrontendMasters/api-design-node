var fs = require('fs');

var readFile = function() {
  return new Promise(function(resolve, reject) {
    fs.readFile('./package.json', function(err, file) {
      return err ? reject(err) : resolve(file.toString());
    });
  });
};

var readAllFiles = function() {
  var promises = [readFile(), readFile(), readFile()];
  return Promise.all(promises);
};


var logFile = function() {
  return readFile()
    .then(function() {
      return readFile()
    });
}
// start a loading
readAllFiles()
  .then(function(files) {
    console.log(files.length);
  });


