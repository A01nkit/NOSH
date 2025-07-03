import mongoose, { Schema } from "mongoose";

const DishSchema = new mongoose.Schema({
  dishId: { type: String, unique: true },
  dishName: String,
  imageUrl: String,
  isPublished: Boolean
});

export const Dish = mongoose.model('Dish', DishSchema);