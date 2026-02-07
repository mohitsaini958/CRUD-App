const Crud=require("../models/CrudModel");

module.exports.GetData=async(req,res)=>{
    const data=await Crud.find();
    res.status(200).json(data);
}

module.exports.Post=async(req,res)=>{
    const {title,content}=req.body;
    if(!content)return res.status(400).json({message:"add data in input text"});
    const ladle=await Crud.create({title:title,content:content});
    res.status(201).json({message:"post created successfully"});
}



module.exports.Delete=async(req,res)=>{
    const {id}=req.params;
    const update=await Crud.findByIdAndDelete(id);
    res.status(201).json({message:"post deleted successfully"});
}
