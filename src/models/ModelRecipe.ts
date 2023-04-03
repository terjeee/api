import mongoose, { Schema } from "mongoose";

const ingredientSchema = new mongoose.Schema({
  ingredient: { type: String, required: [true, "Ingredient is required :)"] },
  quantity: { type: String, require: true },
});

const schemaRecipe: Schema = new mongoose.Schema({
  accepted: {
    type: Boolean,
    default: false,
    select: false,
  },
  title: {
    type: String,
    required: [true, "Title is required :)"],
    unique: [true, "Recipe title already exists!"],
  },
  num_servings: {
    type: String,
    required: [true, "Servings is required :)"],
  },
  duration_min: {
    type: String,
    required: [true, "Duration is required :)"],
  },
  description: {
    type: String,
    required: false,
  },
  ingredients: {
    type: [ingredientSchema],
    required: [true, "[Ingredients] are required :)"],
    validate: function () {
      this.ingredients.length > 0;
    },
  },
  steps: {
    type: [{ type: String }],
    required: [true, "[Steps] are required :)"],
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  updated_at: {
    type: Date,
  },
});

export default mongoose.model("Recipe", schemaRecipe);
