var express = require('express');
var bodyParser = require('body-parser')

var food = require('./routes/food')
// var pool = require('../modules/pools')

var app = express();
var port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('server/public'))

app.use('/food', food);

app.listen(port, function () {
    console.log('port', port);
});