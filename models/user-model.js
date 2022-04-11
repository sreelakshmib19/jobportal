const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  Full_Name: {
    type: String,
    required: true,
    maxlength: [25, "maximum 25 letters"],
    trim: true,
  },
  Email_Id: {
    type: String,
    required: true,
    maxlength: [50, "maximum 50 letters"],
    trim: true,
    unique: [true, "The Email is already exist"],
  },
  password: {
    type: String,
    required: true,
    maxlength: [150, "maximum 150 letters"],
    trim: true,
  },
  Mobile_Number: {
    type: Number,
    required: true,
    maxlength: [10, "maximum 10 numbers"],
    trim: true,
  },
  Work_Status: {
    type: String,
    required: true,
    maxlength: [50, "maximum 50 letters"],
    trim: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
