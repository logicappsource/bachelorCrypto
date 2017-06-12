var db = require('../database/database'); 
var bcrypt = require('bcryptjs'); 
var salt = bcrypt.genSaltSync(5);


module.exports.createUser = function(req, res) {
    var password = bcrypt.hashSync(req.body.user_password, salt ); 

    var query = "INSERT INTO users (username, user_password, email) VALUES ('" + req.body.username + "', '" + password + "', '" + req.body.email + "')";

    db.query(query).spread(function(result, metadata) {
            res.status(200).send("User was successfully created.");
    }).catch(function(err) {
            res.status(500).send("User was not created - Failed ");
    })
}


