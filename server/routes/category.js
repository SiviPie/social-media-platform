const express = require("express");
const { postCategory, getCategory, deleteCategory} = require("../controllers/category");
const router = express.Router();

router.post("/category", postCategory);
router.get("/category", getCategory);
router.get("/categories", getCategory);
router.delete("/category", deleteCategory);

module.exports = router;