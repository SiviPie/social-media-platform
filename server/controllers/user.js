const userModel = require("../models/user.js");

const postUser = async (req, res) => {
  const user = new userModel(req.body);
  try {
    await user.save();
    res.json(user);
  } catch (error) {
    console.log(error);
    res.json({});
  }
};

const getUser = async (req, res) => {
  if ("_id" in req.body) {
    try {
      const user = await userModel.findOne({ _id: req.body._id });
      res.send(user);
    } catch (error) {
      res.send("Could not find user");
    }
  } else res.send({ err: "please fill out _id field" });
};

const getUsers = async (req, res) => {
  const users = await userModel.find();
  res.send(users);
};

const patchUser = async (req, res) => {
  if ("_id" in req.body) {
    try {
      const users = await userModel.find({ _id: req.body._id });
      if (users.length != 0) {
        if ("action" in req.body) {
          if (req.body.action == "change-username") {
            await userModel.updateOne(
              { _id: users[0]._id },
              { username: req.body.username }
            );
            console.log("Changed username " + users[0].username);
            res.send({ success: "true" });
          } else if (req.body.action == "change-avatar") {
            await userModel.updateOne(
              { _id: users[0]._id },
              { avatar: req.body.avatar}
            );
            console.log("Changed avatar " + users[0].username);
            res.send({ success: "true" });
          } else res.send({ err: "action not recognised" });
        } else res.send({ err: "plese fill out action field" });
      } else res.send({ err: "could not find user with specified id" });
    } catch (error) {
      res.send({ err: "could not get users: " + error.message });
      return;
    }
  } else res.send({ err: "please fill out _id field" });
};

const deleteUser = async (reg, res) => {
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
  postUser,
  getUser,
  getUsers,
  patchUser,
  deleteUser,
};
