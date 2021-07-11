const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  phone: String,
  address:{
    type:String,
    default: "Hà Nội"
  }
});

module.exports = mongoose.model("User", userSchema);
