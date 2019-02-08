const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

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
        ref: mongoose.model('Guest', GuestSchema)
    }
});

//export the model 
module.exports = mongoose.model('Admin', AdminSchema);