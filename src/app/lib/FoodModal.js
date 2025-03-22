const { default: mongoose } = require("mongoose");

let FoodModal = new mongoose.Schema({
          name: String,
          price: Number,
          path: String,
          description: String
});
export const FoodSchema = mongoose.models.food_Item || mongoose.model("food_item", FoodModal);