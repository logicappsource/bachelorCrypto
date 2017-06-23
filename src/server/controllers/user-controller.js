var db = require('../database/database'); 
var bcrypt = require('bcryptjs'); 
var salt = bcrypt.genSaltSync(5);
var jwt = require('jsonwebtoken');



module.exports.createUser = function(req, res) {
    var password = bcrypt.hashSync(req.body.user_password, salt ); 

    var query = "INSERT INTO users (username, user_password, email) VALUES ('" + req.body.username + "', '" + password + "', '" + req.body.email + "')";

    db.query(query).spread(function(result, metadata) {
            res.status(200).send("User was successfully created.");
    }).catch(function(err) {
            res.status(500).send("User was not created - Failed ");
    })
}

module.exports.logIn = function(req, res) {
    var submittedPassword = req.body.password; 
    var query = "SELECT * FROM users WHERE username='" + req.body.loginName + "' OR email='" + req.body.loginName + "'";

    var testQuery = "SELECT * FROM users"; 

    db.query(query).spread(function(result, metadata) {
        if(result.length > 0) {
           var userData = result[0];
           var isVerified = bcrypt.compareSync(submittedPassword, userData.user_password);

           var token = jwt.sign(userData, process.env.SECRET, {
                    expiresIn: 60*60*24
           })

            if (isVerified) {
                delete userData.user_password; 
                //User Authenticated - Apply token 
                      res.json({
                    userData: userData  
                })
            } else {
                res.status(400).send("user enter the wrong password "); 
                    }           
        }
        }).catch(function(err) {
            res.status(500).send("unable to process the query. ");  
    })
}



//Nodule for API -> Crypto Currencies 
//Notifications -> FROM remote php synchronize in the app -> 
//Login 
