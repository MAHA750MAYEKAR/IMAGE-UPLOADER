import User from "../schema/userSchema";

 export const findUserByEmail=async function(email){
    try{
        const user=await User.findOne({email})
        return user

    }
    catch(err){
        console.log("err in findinguser by email",err);
        
    }

}

export const findAllUsersByEmail=async function(email){
    try{
        const user=await User.find({email})
        return user
    }
    catch(err){
        console.log("err in finding all user by email",err);

    }

}