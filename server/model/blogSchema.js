import mongoose from "mongoose";

const BlogSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    picture:{
        type:String,
        required:true,
    },
    view:{
        type:Number,
        required:true,
    },
    createdAt:{
        type:Date,
    },

});
const blog=mongoose.model('imagePost',BlogSchema);
export default blog;