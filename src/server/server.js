var express = require('express'); 
var app = express(); 
var bodyParser = require('body-parser'); 
var db = require('./database/database');



db.sync().then(function() {
    app.listen(3000, function () {
        console.log('node server js is working');
    })
})



