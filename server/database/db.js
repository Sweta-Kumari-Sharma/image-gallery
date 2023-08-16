import mongoose from "mongoose";

const connection=async(USERNAME,PASSWORD)=>{
    const URL=`mongodb+srv://${USERNAME}:${PASSWORD}@blogging-website.udzvpld.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{
            useNewUrlParser:true,
        })
        console.log('Successfully connected to database');
    }catch(e){
        console.log('Error while connecting to database..',e);
    }
}

export default connection;