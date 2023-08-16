import axios from "axios";

const URL="";

export const authenticateSignup=async (data)=>{
    try{
        return await axios.post(`${URL}/signup`,data);
    }catch(error){
        console.log(error);
        throw error;
    }
}

export const authenticateLogin=async (data)=>{
    try{
        return await axios.post(`${URL}/login`,data);
    }catch(error){
        console.log(error);
        return error.response;
    }
}