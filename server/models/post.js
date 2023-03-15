const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
    title: {
        required: true,
        type: String,
    },
    category: {
        required: true,
        type: String,
    },
    description: {
        required: true,
        type: String,
    },
    upvotes: {
        type: Number,
        default: 0,
    },
    downvotes: {
        type: Number,
        default: 0,
    },
    link: {
        type: String
    },
    linkIsImage: {
        type: Boolean,
        default: false
    },
    user: {
        required: true,
        type: String,
    },
    isFavorite: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

module.exports = Post = mongoose.model("Post", postSchema);