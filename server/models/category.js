const mongoose = require("mongoose");
const categorySchema = mongoose.Schema({
    title: {
        required: true,
        unique: true,
        type: String,
    },
    description: {
        required: true,
        type: String,
    },
    rules: {
        type: String,
    }
})
module.exports = Category = mongoose.model("Category", categorySchema);

