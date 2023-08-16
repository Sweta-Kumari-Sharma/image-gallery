import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        max:20
    },
    username:{
        type:String,
        required:true,
        trim:true,
        index:true,
        unique:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
    },
});

const user=mongoose.model('person',userSchema);
export default user;