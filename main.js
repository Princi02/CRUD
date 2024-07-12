import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from "mongoose";
import route from "./routes/route.js";
import path from "path";
import bodyParser from 'body-parser';

mongoose.connect(process.env.MONGO_URL).then(
    console.log("connected to DB")
)
const app = express();
// const PORT =  5000;

app.set('view engine', 'ejs');
app.set('views','./views');


app.use(express.static(path.join(process.cwd(),'public')))
  //body parser
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}))

app.use('/',route);

app.listen(process.env.PORT,(req,res)=>{
    console.log("connected to server")
})