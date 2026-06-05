const mongoose = require('mongoose');
//const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true, 'Please provide a name']
    },
    email: {
        type:String,
        required:[true, 'Please provide an email'],
        unique:true,
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
    },
    password: {
        type:String,
        required:[true, 'Please provide a password']
    },
    phone: {
        type:String
    }},
    
    {timestamps:true

});

module.exports = mongoose.model('User', userSchema);