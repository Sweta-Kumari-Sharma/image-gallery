import ImagePost from '../model/blogSchema.js';


export const createBlog=async(req, res)=>{
    try{
        const blog=await new ImagePost(req.body);
        blog.save()
        res.status(200).json('Post saved successfully');
    }
    catch(e){
        console.log(e);
        console.log('message ', e.message);
        res.status(500).json(e);
    }
}

export const getAllBlogs=async(req,res)=>{
    console.log(req.body);
    console.log(req.headers);
    console.log(req.query);
    try{
        const post=await ImagePost.find({}).sort({ createdAt: -1 });
        console.log(post);
        res.status(200).json(post)
    }
    catch(e){
        res.status(500).json({message: e.message});
    }
}
export const getUserBlog=async(req,res)=>{
    try{
        console.log(req.params.user);
        const blog=await ImagePost.find({ username: req.params.user });
        return res.status(200).json(blog);
    }
    catch(e){
        return res.status(500).json({message:e.message})
    }
}
export const getBlog=async(req,res)=>{
    try{
        console.log(req.params.id);
        const blog=await ImagePost.findById(req.params.id);
        return res.status(200).json(blog);
    }
    catch(e){
        return res.status(500).json({message:e.message})
    }
}

export const updateBlog=async(req,res)=>{
    try{
        const blog=await ImagePost.findById(req.params.id);
        if(!blog){
            res.status(404).json({message:'Blog not found'});
        }
        const updatedBlog=await ImagePost.findByIdAndUpdate(req.params.id, {$set:req.body});
        res.status(200).json({message:'Blog updated successfully',updatedBlog})

    }catch(e){
        console.log(e);
        res.status(500).json({message:e})

    }
}

export const updateviews=async(req,res)=>{
    try{
        console.log('body');
        console.log(req.body);
        const blog=await ImagePost.findById(req.params.id);
        if(!blog){
            res.status(404).json({message:'Image not found'});
        }
        const updatedBlog=await ImagePost.findByIdAndUpdate(req.params.id,{$set:req.body});
        res.status(200).json({message:'views updated successfully',updatedBlog})

    }catch(e){
        console.log(e);
        res.status(500).json({message:e})
    }
}

export const deleteBlog=async(req, res)=>{
    try{
        await ImagePost.findByIdAndDelete(req.params.id);
        res.status(200).json({message:'Blog deleted successfully'});
        // const blog=await Blog.findById(req.params.id);
        // if(!blog){
        //     res.status(404).json({message:'Blog not found'});
        // }
        // else{
        //     await blog.delete()
        //     res.status(200).json({message:'Blog deleted successfully'});
        // }
    }catch(e){
        console.log(e);
        res.status(500).json({message:e});
    }
}