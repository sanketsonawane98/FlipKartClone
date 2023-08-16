import express from "express";
import dotenv from "dotenv"
import { Connection } from "./database/db.js";
import DefaultData from "./default.js";
import router from "./routes/routes.js";
import cors from "cors";
import bodyparser from "body-parser";

const app=express();

dotenv.config({
    origin:["http://localhost:8000","https://FlipCartClone.onrender.com"]
});

app.use(cors());
app.use(bodyparser.json({extended:true}));
app.use(bodyparser.urlencoded({extended:true}));

app.use('/',router);
const userName=process.env.USER;
const password=process.env.PASSWORD;

const URL=process.env.MONGODB_URI || `mongodb+srv://${userName}:${password}@cluster0.1jgckmq.mongodb.net/ecommerceDB`;
const PORT=process.env.port || 8000;


Connection(URL);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
  console.log("MONGODB_URI:", process.env.MONGODB_URI);
  console.log("USER:", process.env.USER);
  console.log("PASSWORD:", process.env.PASSWORD);
  
app.listen(PORT,function(){
    console.log(`server started at port ${PORT}`);
})

DefaultData();