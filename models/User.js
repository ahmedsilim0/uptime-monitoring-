const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, maxLength: 100 },
        email: { type: String, required: true, maxLength: 100 },
        password: { type: String, required: true, maxLength: 100 },
        confirmed:{type:Boolean ,default:false},
    }
);


module.exports = mongoose.model('User' , userSchema);