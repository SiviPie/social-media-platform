const commentModel = require("../models/comment.js");

const postComment =  async (req, res) => {
    const comment = new commentModel(req.body)
    try {
        await comment.save();
        res.json(comment);
    } catch (error) {
        console.log(error);
        res.json({error: error});
    }
}


module.exports = {
    postComment
}