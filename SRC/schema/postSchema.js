import mongoose from "mongoose";

const postSchema=new mongoose.Schema({
    caption:{
        type:true,
        minlength:10,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }


},{timestamps:true})

const post=mongoose.model("Post",postSchema)

export default post