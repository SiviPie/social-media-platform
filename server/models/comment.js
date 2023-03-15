const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    user: {
        required: true,
        type: String
    },
    parentPost: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    parentComment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    },
    text: {
        required: true,
        type: String
    },
    upvotes: {
        default: 0,
        type: Number
    },
    downvotes:  {
        default: 0,
        type: Number
    }
},
{timestamps: true}
)

module.exports = Comment = mongoose.model("Comment", commentSchema);