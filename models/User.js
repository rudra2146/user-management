const mongoose = require('mongoose')
// const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true,
    },
    role:{
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
    }
});

module.exports = mongoose.model('User',userSchema)