var express = require('express');
var app = express();
var api = require('./api/api');
var config = require('./config/config');
var logger = require('./util/logger');
var auth = require('./auth/routes');
// db.url is different depending on NODE_ENV
require('mongoose').connect(config.db.url);

if (config.seed) {
  require('./util/seed');
}
// setup the app middlware
require('./middleware/appMiddlware')(app);

// setup the api
app.use('/api', api);
app.use('/auth', auth);
// set up global error handling

app.use(function(err, req, res, next) {
  logger.error(err.stack);
  res.status(500);
});

// export the app for testing
module.exports = app;
