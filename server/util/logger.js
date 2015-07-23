// no var needed here, colors will attached colors
// to String.prototype
require('colors');
var _ = require('lodash');

var config = require('../config/config');

// create a noop (no operation) function for when loggin is disabled
var noop = function(){};
// check if loggin is enabled in the config
// if it is, then use console.log
// if not then noop
var consoleLog = config.logging ? console.log.bind(console) : noop;

var logger = {
  log: function() {
    // arguments is an array like object with all the passed
    // in arguments to this function
    var args = _.toArray(arguments)
      .map(function(arg) {
        if(typeof arg === 'object') {
          // turn the object to a string so we
          // can log all the properties and color it
          var string = JSON.stringify(arg, 2);
          return string.magenta;
        } else {
          // coerce to string to color
          arg+='';
          return arg.magenta;
        }
      });

    // call either console.log or noop here
    // with the console object as the context
    // and the new colored args :)
    consoleLog.apply(console, args);
  },

  error: function() {
    consoleLog.apply(console, _.toArray(arguments));
  }
};

module.exports = logger;
