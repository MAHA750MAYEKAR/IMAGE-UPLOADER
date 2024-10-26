import mongoose from "mongoose"


const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        require:true,
        unique:true,
        minlength:5
    },
    password:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
        validate:{
            validator:function(emailValue){
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue);

            },
            message:"invalid email format"
        }
    }
},{timestamps:true})

const user=mongoose.model("User",userSchema)

export default user