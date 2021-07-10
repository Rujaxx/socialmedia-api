const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username:{
        type : String,
        required: [true, "Please add a name"],
        unique: true,
    },
    email:{
        type : String,
        required: [true, "Please add an email"],
        unique: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please add a valid email'
        ]
    },
    password:{
        type : String,
        required: [true, "Please add an password"],
        minlength: 6,
        select: false
    },
    profilePicture: {
        type: Buffer,
        default: ""
    },
    coverPicture: {
        type: Buffer,
        default: ""
    },
    followers: {
        type: Array,
        default:[]
    },
    following: {
        type: Array,
        default:[]
    },
    isAdmin :{
        type : Boolean,
        default : false
    },
    resetPasswordToken:String,
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User',UserSchema)