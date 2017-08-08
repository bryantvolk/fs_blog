'use strict';

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var logger = require('morgan');

// add exported object with key url and value mongodb uri to run this
var mongoDB = require('./db.js');

var routes = require('./routes/index');
var posts = require('./routes/posts/index');
var postsAPI = require('./routes/posts/api');

var app = express();

// port
const port = process.env.PORT || 8000;

// db config
mongoose.connect(mongoDB.url, {useMongoClient: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// body-parser and other stuff
app.use(logger("dev"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use('/', routes);
app.use('/posts', posts);
app.use('/api/posts', postsAPI);

// start server
app.listen(port, function() {
  console.log(`Server is live on port: ${port}`);
});

module.exports = app;