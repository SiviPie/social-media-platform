const express = require("express");
const {postPost, getPosts, getFavorites, patchPost, getCategoryPosts} = require("../controllers/post");
const router = express.Router();


// router.get("/post/:id", getOnePost)  
router.post("/post", postPost)
router.get("/post", getPosts)
router.get("/posts", getPosts)
router.patch("/post", patchPost)
router.get("/favorites", getFavorites)
router.get("/r/:categ", getCategoryPosts)

module.exports = router