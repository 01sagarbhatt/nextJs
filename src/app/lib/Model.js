const { default: mongoose } = require("mongoose");

const RestaurantModal = new mongoose.Schema({
          fname: String,
          restoName: String,
          email: String,
          city: String,
          password: String,
          passwordConfirm : String
       
});

export const RestaurantSchema = mongoose.models.Restaurants || mongoose.model("Restaurants", RestaurantModal);