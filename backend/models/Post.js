
import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, },
  description:{type:String,},
  category: { type: String,},
  image: String,
});

export default mongoose.model('Pizza', PostSchema);1