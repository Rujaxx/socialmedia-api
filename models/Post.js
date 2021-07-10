const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    description:{
        type : String,
        required: [true, "Please add a description"],
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

module.exports = mongoose.model('Post',PostSchema)