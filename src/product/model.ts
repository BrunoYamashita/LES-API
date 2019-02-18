import mongoose from "mongoose";

const Product = new mongoose.Schema({
    title: { type: String, required: true },
    user: { type: String, required: true },
    yearPublished: { type: String, required: true },
    price: { type: String, required: true },
    rating: { type: String, required: true }
})
  
export type productModel = typeof Product;

export default mongoose.model('Product', Product)

