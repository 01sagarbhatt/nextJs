const { default: mongoose } = require("mongoose");

let FoodModal = new mongoose.Schema({
          name: String,
          price: Number,
          path: String,
          description: String, 
          restaurant_ID: String, 
        
});
export const FoodSchema = mongoose.models.food_Item || mongoose.model("food_Item", FoodModal);