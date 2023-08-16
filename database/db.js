import mongoose from "mongoose"
export const Connection=  async(URL)=>{
    try{
        await mongoose.connect(URL,{useNewurlParser:true,useUnifiedTopology:true});
        console.log("Database connected successfully");
    }catch(err){
        console.log(err.message)
    }
}