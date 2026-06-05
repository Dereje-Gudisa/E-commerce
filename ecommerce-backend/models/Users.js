const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true, 'Please provide a name']
    },
    email: {
        type:String,
        required:[true, 'Please provide an email']
    },
    password: {
        type:String,
        required:[true, 'Please provide a password']
    },
    phone: {
        type:String
    }
    
});

module.exports = mongoose.model('User', userSchema);