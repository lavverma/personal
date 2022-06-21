const blogModel = require("../models/blogModel");

let blogValidate=async function(req,res,next){
    try{
let blogId=req.params.blogId
let check=await blogModel.findById(blogId)
    if(!check){
        res.status(404).send({status:false, msg: ""})
    }
    next()
}
catch(err){
  res.status(500).send({error: err.message})
}
}
 module.exports.blogValidate=blogValidate


//////////////////////////////////////////////////////////////////////////////////

let checkValidate=async function(req,res,next){
    try{
let blogId=req.query._id
let check=await blogModel.findById(blogId)
    if(!check){
        res.status(404).send({status:false, msg: ""})
    }
    next()
}
catch(err){
    res.status(500).send({error: err.message})
}
}
module.exports.checkValidate=checkValidate