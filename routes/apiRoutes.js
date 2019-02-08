const express = require ('express');
const router = express.Router();

//require the controllers 
const guest_controller = require('../controllers/guest.js');

//testing file communication
router.get('/test', guest_controller.test);

module.exports = router;