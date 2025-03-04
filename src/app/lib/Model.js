const { default: mongoose } = require("mongoose");

const RestaurantModal = new mongoose.Schema({
          fname: String,
          lname: String,
          email: String,
          password: String
       
});

export const RestaurantSchema = mongoose.models.Restaurants || mongoose.model("Restaurants", RestaurantModal);