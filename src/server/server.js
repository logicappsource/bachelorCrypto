var express = require('express'); 
var app = express(); 
var bodyParser = require('body-parser'); 
var db = require('./database/database');


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));


//Controllers 
var userController = require('./controllers/user-controller'); 

//Routes 
app.post('/api/user/create', userController.createUser); 



db.sync().then(function() {
    app.listen(3000, function () {
        console.log('node server js is working');
    })
})



