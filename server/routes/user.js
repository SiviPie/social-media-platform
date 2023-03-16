const express = require("express");
const {postUser, getUser, getUsers, patchUser, deleteUser} = require("../controllers/user");
const router = express.Router();

 
router.post("/user", postUser)
router.get("/users", getUsers)
router.get("/user", getUser)
router.patch("/user", patchUser)
router.delete("/user", deleteUser)

module.exports = router