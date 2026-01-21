import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
         id:String,
        img:String,
        model:String,
        brand:String,
        price:Number,
        color:String,
        count:Number,
        isAdded:String,
        type:String,   
        isTrending:Boolean,
        description:String
});

const Data = mongoose.model("Data", dataSchema);
export default Data;
