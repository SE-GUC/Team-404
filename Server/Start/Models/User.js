const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    phonenumber: {
        type: Number,
        required: true
    },
    usertype: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }

 
})

module.exports = User = mongoose.model('users', UserSchema)
