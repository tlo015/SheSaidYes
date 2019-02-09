const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

//Alllow admin to login and create guests
let AdminSchema = new Schema ({
    username: {
        type: String, 
        required: [true, 'Please enter your name'],
        max: 100
    },
    password: {
        type: String,
        required: [true, 'Please enter the password']
    },
    guest: {
        type: Schema.Types.ObjectId,
        ref: 'Guest',
    }
});

//export the model 
module.exports = mongoose.model('Admin', AdminSchema);