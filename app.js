var dotenv = require('dotenv');
if (process.env.NODE_ENV != 'production') {
  dotenv.load();
}
process.env.APP_ROOT = process.cwd()

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
app.use(express.static(process.env.APP_ROOT + '/grafana-1.8.1', {maxAge: config.brower_cache_maxage || 0}));

http.createServer(app).listen(config.listen_port);
console.log('Server listening on ' + config.listen_port);
