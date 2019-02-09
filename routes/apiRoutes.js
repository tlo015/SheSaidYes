const express = require ('express');
const router = express.Router();
const Guest = require('../models/Guest');

//require the controllers 
//test file communication
const guest_controller = require('../controllers/guest');
router.get('/test', guest_controller.test);

//Admin controllers
const getAdmin = require('../controllers/admin');

//Guest controllers
const getGuest = require('../controllers/guest');

//Plus One controllers 
const getPlusOne = require('../controllers/plusone');

//get a list of guests from database
router.get('/guest', function(req, res, next){
    res.send({ type: 'GET'});
});

//add a new guests to database
router.post('/guest', function(req, res, next){
    console.log(req.body);
    //create a new guest from the body
    //save to the database 
    //wait until action is complete 
    //send the json back to client so we know it is successful
    Guest.create(req.body).then(function(guest){
        res.send(guest);
    }).catch(next);
});

//update a guest in database
router.put('/guest/:id', function(req, res, next){
    Guest.findByIdAndUpdate({_id:req.params.id},req.body).then(
        function(){
            Guest.findOne({_id:req.params.id}).then(
                function(guest){
            res.send(guest);
        });
    });
});

//delete a guest from database
router.delete('/guest/:id', function(req, res, next){
    console.log(req.params.id);
    //find by id
    Guest.findByIdAndRemove({_id:req.params.id}).then(
        function(guest) {
            res.send(guest);
        });
})

//export so that other files can use 
module.exports = router;