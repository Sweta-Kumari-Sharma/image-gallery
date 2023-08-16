import express from "express";
import connection from "./database/db.js";
import dotenv from 'dotenv'
import Routes from "./router/router.js";
import cors from 'cors';
import bodyParser from "body-parser";

const app=express();
const PORT=8000;

dotenv.config();

const USERNAME=process.env.DB_USERNAME; 
const PASSWORD=process.env.DB_PASSWORD;

app.use(cors());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',Routes);

connection(USERNAME,PASSWORD);

app.listen(PORT,()=>{
    console.log('server listening on port 8000');
})
