const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

let GuestSchema = new Schema ({
    username: {
        type: String, 
        required: [true, 'Please enter your name'],
        max: 100
    },
    password: {
        type: String,
        required: [true, 'Please enter the password']
    }
});

//export the model 
module.exports = mongoose.model('Guest', GuestSchema);