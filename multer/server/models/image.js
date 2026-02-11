import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  imageUrl: String,
});

export default mongoose.model("Image", imageSchema);
