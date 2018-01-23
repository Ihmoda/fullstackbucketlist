// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');

require('./server/config/mongoose.js');

// use it!
app.use(bodyParser.json());
// static content
app.use(express.static(path.join(__dirname, "./client/static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});