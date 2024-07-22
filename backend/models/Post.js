
// import mongoose from "mongoose";

// const PostSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   price: { type: Number, },
//   description:{type:String,},
//   category: { type: String,},
//   image: String,
// });

// export default mongoose.model('Pizza', PostSchema);

import mongoose from 'mongoose';

const PizzaSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  category: String,
  price: Number,
  imageUrl: String,
});

export default mongoose.model('Pizza', PizzaSchema);