import User from "../model/userSchema.js";

export const signupUser=async(req,res)=>{
    try{
        console.log(req.body);
        const existUser=await User.findOne({username:req.body.username});
        if(existUser){
            return res.status(401).json({message:'User already exists'});
        }
        const newUser=new User(req.body);
        await newUser.save();
        res.status(200).json({message:newUser});
    }
    catch(e){
        console.log(e.message);
    }
}

export const loginUser=async(req,res)=>{
    try{
        const existUser=await User.findOne({username:req.body.username, password:req.body.password});
        if(existUser){
            return res.status(200).json({message:'successful login', data:existUser})
        }
        else{
            return res.status(401).json('invalid login')
        }
    }catch(e){
        res.status(500).json("error: ",e.message);
        console.log(e.message);
    }
}