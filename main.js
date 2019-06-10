var express = require('express');
var app = express();

var http = require('http');
var app = require('express')();

var ip = process.env.IP || '0.0.0.0';
var port = process.env.PORT || 8080;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

http.createServer(app).listen(port, ip, function () {
  console.log(`Example app listening on port ${port}!`);
});