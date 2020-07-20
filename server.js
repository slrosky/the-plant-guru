var express = require('express');
var path = require('path');
var logger = require('morgan');
var favicon = require('serve-favicon');
  /*--- Spot for database ---*/
  /*--- Spot for recordRouter ---*/
// more basics
const app = express();

require('dotenv').config();
require('./config/database');

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use(require('./config/auth'));

  /*--- Spot for api routes ---*/
app.use('/api/users', require('./routes/api/users'));
app.use('/api/plants', require('./routes/api/plants'));
app.use('/api/plantMatch', require('./routes/api/plantMatch'));
  /*--- Spot for catch all route ---*/
// set up listen on different port 
const port = process.env.PORT || 3001;
app.listen(port, function() {
  console.log(`Express app listening on port ${port}`);
});