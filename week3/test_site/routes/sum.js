var express = require('express');
var app = express.Router();

app.use(express.static('public'))

module.exports = app;