const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    body:{
        type : String,
        required: [true, "Please add a comment"],
        unique: true,
    },
    photo: {
        type: Buffer,
        default: ""
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Comment',CommentSchema)