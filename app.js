var dotenv = require('dotenv');
if (process.env.NODE_ENV != 'production') {
  dotenv.load();
}

var express = require('express');
var http = require('http');
var path = require('path');

var config = require('./config');
var app = express();

app.use(express.logger());
app.use(express.cookieParser());
app.use(express.session({ secret: config.cookie_secret }));
//require('./lib/google-oauth').configureOAuth(express, app, config);
app.use(express.compress());
app.use(express.static(path.resolve(__dirname + '/grafana'), {maxAge: config.brower_cache_maxage || 0}));

http.createServer(app).listen(config.listen_port);
console.log('Server listening on ' + config.listen_port);
