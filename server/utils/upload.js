import multer from "multer";
import dotenv from 'dotenv';
import {GridFsStorage} from "multer-gridfs-storage";

dotenv.config();

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

const storage=new GridFsStorage({
    url:`mongodb+srv://${USERNAME}:${PASSWORD}@blogging-website.udzvpld.mongodb.net/?retryWrites=true&w=majority`,
    options:{useNewUrlParser:true},
    file:(req,file)=>{
        const match=['image/png', 'image/jpg'];

        if(match.indexOf(file.memeType)===-1)
            return `${Date.now()}-blog-${file.originalname}`;
        return {
            bucketName:'photos',
            fileName:`${Date.now()}-blog-${file.originalname}`,
        }
    }
});

export default multer({storage});