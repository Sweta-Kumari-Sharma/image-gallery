import grid from 'gridfs-stream';
import mongoose from 'mongoose';

const url='http://localhost:8000'
// const url='https://bloggin-website-backend.onrender.com'
let gfs, gridfsBucket;
const con=mongoose.connection;
con.once('open',()=>{
    gridfsBucket=new mongoose.mongo.GridFSBucket(con.db, {
        bucketName:'fs'
    });
    gfs=grid(con.db, mongoose.mongo);
    gfs.collection('fs');
});

export const uploadFile=(req,res)=>{
    if(!req.file)
        return res.status(404).json({message:'file not found'});
    const imageUrl=`${url}/file/${req.file.filename}`;
    res.status(200).json(imageUrl);
}

export const getImage=async(req,res)=>{
    try{
        const file=await gfs.files.findOne({filename:req.params.filename});
        const readStream=gridfsBucket.openDownloadStream(file._id);
        readStream.pipe(res);
    }
    catch(e){
        res.status(500).json({msg:e.message});
    }
}