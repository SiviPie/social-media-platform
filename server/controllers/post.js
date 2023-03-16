const postModel = require("../models/post.js");

const postPost = async (req, res) => {
  const post = new postModel(req.body);
  try {
    await post.save();
    res.json(post);
  } catch (error) {
    console.log(error);
    res.json({});
  }
};

const getPosts = async (req, res) => {
  const posts = await postModel.find();
  res.send(posts);
};

const getFavorites = async (req, res) => {
  const posts = await postModel.find({ isFavorite: true });
  res.send(posts);
};

const getCategoryPosts = async (req, res) => {
  try {
    const posts = await postModel.find({ category: req.url.split("/")[2] });
    res.send(posts);
  } catch (error) {
    res.send([]);
  }
};

const patchPost = async (reg, res) => {
  if ("_id" in reg.body) {
    try {
      const posts = await postModel.find({ _id: reg.body._id });
      if (posts.length != 0) {
        if ("action" in reg.body) {
          if (reg.body.action == "upvote") {
            await postModel.updateOne(
              { _id: posts[0]._id },
              { upvotes: posts[0].upvotes + 1 }
            );
            console.log("upvoted " + posts[0].title);
            res.send({ success: "true" });
          } else if (reg.body.action == "downvote") {
            await postModel.updateOne(
              { _id: posts[0]._id },
              { downvotes: posts[0].downvotes + 1 }
            );
            console.log("downvoted " + posts[0].title);
            res.send({ success: "true" });
          } else if (reg.body.action == "toggleFavorite") {
            await postModel.updateOne(
              { _id: posts[0]._id },
              { isFavorite: !posts[0].isFavorite }
            );
            console.log("favorite");
            res.send({ success: "true" });
          } else res.send({ err: "action not recognised" });
        } else res.send({ err: "plese fill out action field" });
      } else res.send({ err: "could not find post with specified id" });
    } catch (error) {
      res.send({ err: "could get posts" });
      return;
    }
  } else res.send({ err: "please fill out _id field" });
};

const deletePost = async (reg, res) => {
  if ("_id" in reg.body) {
    try {
      const post = await postModel.findOne({ _id: reg.body._id });
      if (post.length != 0) {
        if ("action" in reg.body) {
          if (reg.body.action == "delete") {
            await postModel.deleteOne({
              _id: post._id,
            });
            console.log("deleted " + post.title);
          }
        }
      }
      res.send({ success: true });
    } catch (error) {
      res.json({ error: `Post not found` });
    }
  } else res.json({ error: `Please fill in id field` });
};

module.exports = {
  postPost,
  getPosts,
  patchPost,
  getFavorites,
  getCategoryPosts,
  deletePost,
};
