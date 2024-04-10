import mongoose from "mongoose";
const regSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
        
    },
    password:{
        type:String,
        required:true,
    }
});
export const regUser = mongoose.model("Registration",regSchema)

