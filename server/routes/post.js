const express = require("express");
const {postPost, getPost, getPosts, getFavorites, patchPost, getCategoryPosts, deletePost} = require("../controllers/post");
const router = express.Router();


// router.get("/post/:id", getOnePost)  
router.post("/post", postPost)
router.get("/post/:id", getPost)
router.get("/post", getPosts)
router.get("/posts", getPosts)
router.patch("/post", patchPost)
router.get("/favorites", getFavorites)
router.get("/r/:categ", getCategoryPosts)
router.delete("/post", deletePost)

module.exports = router