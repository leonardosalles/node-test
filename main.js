var express = require('express');
var app = express();

var http = require('http');
var app = require('express')();

var port = 80;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

http.createServer(app).listen(80, function () {
  console.log(`Example app listening on port ${port}!`);
});