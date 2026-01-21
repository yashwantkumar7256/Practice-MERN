import mongoose from "mongoose";

const authSchema= mongoose.Schema({

    fullname:String,
    email:String,
    password:String

})

const auth=mongoose.model('user',authSchema)
export default auth;
