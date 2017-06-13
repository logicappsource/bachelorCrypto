var express = require('express'); 
var app = express(); 
var bodyParser = require('body-parser'); 
var db = require('./server/database/database');
var jwt = require('jsonwebtoken'); 

process.env.SECRET = "logiccryptonite"; 


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use('/client', express.static(__dirname + '/client'));

//Controllers 
var userController = require('./server/controllers/user-controller'); 

//Routes 
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/index.html');
})

app.post('/api/user/create', userController.createUser); 
app.post('/api/user/login', userController.logIn);






db.sync().then(function() {
    app.listen(3000, function () {
        console.log('node server js is working');
    })
})


