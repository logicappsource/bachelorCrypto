var express = require('express'); 
var router = express.Router(); 
var db = require('../database/database');
var bodyParser = require('body-parser');  

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true})); 



//Endpoints
router.post('/request_friend', function(req, res) {
   // check if a request has already been sent ... or if they are allready friends 
   var query = "SELECT * FROM user_friend_requests WHERE sender_id=" + req.body.sender_id + " AND received_id=" + req.body.received_id; 

   db.query(query).spread(function(result, metadata) {
        if (result.length === 0) { //NO REQUEST have been made 
                insertRequest(); 
        }
        res.json({
            data: result
        }); 
   }).catch(function(err) {
        res.status(500).send(err); 
   })
   function insertRequest(){
       var query = "INSERT INTO user_friend_requests (sender_id, received_id, status) VALUES (" + req.body.sender_id + "," + req.body.recieved_id + ", 'pending')";
       db.query(query).spread(function(result,metadata) {
            res.status(200).send("Friend request Created Successfully"); 
       }).catch(function() {
           res.status(500).send(err);
       })
   }
});

router.post('/request_friend_respond', function(req, res) {
    //Check to see if the request  even exist 
    query = "SELECT * FROM user_friend_requests WHERE id=" + req.body.request_id + " "; 
    var senderId; 
    var receivedId; 

    db.query(query).spread(function(result, metadata) { 
        if(result.length > 0 ) {
            //Update Accordingly 
            senderId = result[0].sender_id;
            received_id = result[0].received_id; 
            updateRequest(); 
        } else {
            res.status(400).send("Request Dosent Exist: (") 
        }
    })
    function updateRequest(){
                var query = "UPDATE user_friend_requests SET status ='" + req.body.confirmed; 
            db.query(query).spread(function() {
                var isAccepted = req.body.confirmed === 'confirmed'; 
                var query; 

                if(isAccepted){
                    query = "UPDATE user_friend_requests SET status='confirmed'";
                } else {
                    query = "DELETE FROM user_friend_requests WHERE id=" + req.body.request_id; //modify later on 
                }
                db.query(query).spread(function() {
                        if (isAccepted) {
                            performSenderInsert(); 
                    } else {
                        res.status(200).send("we have successfully deleted the request ")
                    }
                })
            }).catch(function() {
                res.status(400).send("Unable to Process query - update to user friend request ")
            })
    }
    function performSenderInsert() { // Avoid call back Hell 
        var query = "INSERT INTO user_friends (user_id, friend_id, date_friended) VALUES ("+ senderId + "," + receivedId + ", now())"; 
        
        db.query(query).spread(function() {

        }).catch(function() {
            res.status(500).send("Unable to send a friend request")
        })
    }
    function performReceiverInsert(){ // Avoid call back Hell 
        var query = "INSERT INTO user_friends (user_id, friend_id, date_friended) VALUES (" + receivedId + "," + senderId + ", now())"; 
        
        db.query(query).spread(function() {
            res.status(200).send("The user was successfully confirmed")
        }).catch(function() {
            res.status(500).send("Unable to send a friend request")
        })   
    }
 });

module.exports = router; 