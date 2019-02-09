const express = require ('express');
const bodyParser = require ('body-parser');
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const apiRoutes = require('./routes/apiRoutes');

//setup express app 
const app = express()

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/RSVP";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Define middleware here
// middleware - route handlers between the request and response 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', apiRoutes);

//catch errors
app.use(function(err, req, res, next){
    res.status(422).send({error: err.message});
});

//listen to port and call back function
app.listen(PORT, () => {
    console.log(`Server now on port ${PORT}!`);
});

//dummy data
// {
// 	"username": "LAWRENCE LIAO",
// 	"password": "Feb02,2020",
// 	"firstname": "Lawrence",
// 	"lastname": "Liao"
// }