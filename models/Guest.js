const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

//Guest login and name Schema
const GuestSchema = new Schema ({
    username: {
        type: String, 
        required: true, 
    },
    password: {
        type: String,
        required: true, 
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    // plusone: {
    //     type: Schema.Types.ObjectId,
    //     ref:"PlusOne",
    // },
});

//create the Model 
const Ninja = mongoose.model('guest', GuestSchema)

//export the model to be used in other files
module.exports = Ninja;