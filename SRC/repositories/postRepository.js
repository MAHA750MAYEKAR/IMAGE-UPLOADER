import Post from "../schema/postSchema";

export const createPost=async function({image,userId,caption}){
    try{
        const newPost=await Post.create({image,userId,caption})
        return newPost
    }
    catch(err){
        console.log("err in creating post",err);
        

    }

}


export const findAllPost=async function(){
    try{
        const AllPost=await Post.find()
        return AllPost
    }
    catch(err){
        console.log("err fing all post",err);
        
    }
}

const findPostById=async(id)=>{
    try{
        const post=await Post.findById({id})
        return post
    }
    catch(err){
        console.log("something went wrong");
        console.log(err);

    }
    
}