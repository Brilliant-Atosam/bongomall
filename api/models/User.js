const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    isAdmin:{
        type: Boolean,
        default: false
    }, 
    profile:{
        type: String
    },
},
   {timestamps: true}
)

module.exports = mongoose.model('User', userSchema)