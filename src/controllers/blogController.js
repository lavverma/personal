const blogModel = require("../models/blogModel");

const createBlog=async function(req,res){
    try{
    let data=req.body;
    let saveData=await blogModel.create(data);
    res.status(201).send({msg:saveData})
}
catch(err){
    res.status(400).send({error: err.message})
}
}
module.exports.createBlog= createBlog;


//////////////////////////////////////////////////////////////////////////////////

const getBlog=async function(req,res){
    try{
    let getData=await blogModel.find();
    res.status(200).send({data: getData});
}
catch(err){
    res.status(500).send({error: err.message})
}
}
module.exports.getBlog=getBlog


//////////////////////////////////////////////////////////////////////////////////

const blogs=async function(req,res){
    try{
    let a=req.query
 let getData=await blogModel.find(a)
 if(getData.length==0){
    res.status(404).send({status:false, msg:""})
 }else{
 res.status(200).send({status:true, data: getData})
 }
}
catch(err){
    res.status(400).send({error: err.message})
}
}
module.exports.blogs=blogs


//////////////////////////////////////////////////////////////////////////////////

const updateBlog=async function(req,res){
    try{
     let updateData=req.body
     let blogId=req.params.blogId
     let updatedData=await blogModel.findByIdAndUpdate((blogId),(updateData),{new:true})
     res.status(201).send({status:true,data: updatedData})
    
}
catch(err){
    res.status(400).send({error: err.message})
}
}
module.exports.updateBlog=updateBlog


//////////////////////////////////////////////////////////////////////////////////

const deleteBlog=async function(req,res){
    try{
    let blogId=req.params.blogId
    let deletedData=await blogModel.findByIdAndUpdate((blogId),{$set:{isDeleted:true,isDeleted:new Date()}},{new:true})
    res.status(201).send({status:true, data:deletedData})
}
catch(err){
    res.status(400).send({error: err.message})
}
}
module.exports.deleteBlog=deleteBlog


//////////////////////////////////////////////////////////////////////////////////

const deleteQuery=async function(req,res){
    try{
    let blogId=req.query
    let deleteData=await blogModel.findByIdAndUpdate((blogId),{isDeleted:true},{new:true})
    res.send({status:true, data:deleteData})
}
catch(err){
    res.status(400).send({error: err.message})
}
}
module.exports.deleteQuery=deleteQuery



