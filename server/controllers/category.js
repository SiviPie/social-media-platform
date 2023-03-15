const categoryModel = require("../models/category.js");
const postModel = require("../models/post.js");
const commentModel= require("../models/comment.js");
const category = require("../models/category.js");
const post = require("../models/post.js");
const comment = require("../models/comment.js");

const postCategory =  async (req, res) => {
    const category = new categoryModel(req.body)
    try {
        await category.save();
        res.json({success: true});
    } catch (error) {
        console.log(error);
        res.json({error: error});
    }
}

const getCategory = async (req, res) => {
    const categories = await categoryModel.find();
    res.send(categories);
}

const deleteCategory = async (req, res) => {
    if('title' in req.body){
        try{
            const categories = await categoryModel.find({title: req.body.title});
            for(let category of categories){
                try{
                    // const posts = await postModel.find({category: category.title});
                    // try{
                    //     for(let post of posts){
                    //         // const comments = await commentModel.deleteMany({parentPost: post._id});
                    //     }
                    // }catch(error){
                    //     res.send({error: `No comments found`});
                    // }
                    const x = await postModel.deleteMany({category: category.title});
                    console.log(x);
                }catch(error){
                    res.send({error: `No posts found`})
                }
            }
            await categoryModel.deleteMany({title: req.body.title});
            res.send({success: true});
        }catch(error){
            res.json({error: `Category not found`})
        }
    }else res.json({error: `Please fill in title field`});
}

module.exports = {
    postCategory,
    getCategory,
    deleteCategory
}