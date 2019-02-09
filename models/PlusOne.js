const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

//the names of Guest's plus one(s)
let PlusOneSchema = new Schema ({
    firstname: {
        type: String, 
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    guest: {
        type: Schema.Types.ObjectId,
        ref: "Guest",
    },
});

//export the model 
module.exports = mongoose.model('PlusOne', PlusOneSchema);