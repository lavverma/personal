const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const blogController= require("../controllers/blogController")
const blogValidation=require("../middleware/blogValidation")



router.post("/authors", authorController.createAuthor)

router.post("/blogs",blogController.createBlog)

router.get("/getBlog",blogController.getBlog)

router.get("/blogs",blogController.blogs)

router.put("/blogs/:blogId",blogValidation.blogValidate, blogController.updateBlog)

router.delete("/blogs/:blogId",blogValidation.blogValidate,blogController.deleteBlog)

router.delete("/blogs", blogValidation.checkValidate,blogController.deleteQuery)



module.exports = router;