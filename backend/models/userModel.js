const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String, 
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an Email'],
        unique: true
    },
    password : {
        type: String,
        required: [true, 'Please add a password']
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true,
})
//timestamps make created at and updaed at timestamp by default

module.exports = mongoose.model('User', userSchema);
