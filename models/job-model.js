const mongoose = require("mongoose");
const JobSchema = new mongoose.Schema({
  Job_Title: {
    type: String,
    required: true,
    maxlength: [100, "maximum 100 letters"],
    trim: true,
  },
  Company_Name: {
    type: String,
    required: true,
    maxlength: [50, "maximum 50 letters"],
    trim: true,
    unique: [true, "The Email is already exist"],
  },
  Location: {
    type: String,
    required: true,
    maxlength: [150, "maximum 150 letters"],
    trim: true,
  },
  Experience: {
    type: Number,
    required: true,
    maxlength: [10, "maximum 10 numbers"],
    trim: true,
  },
  Job_Type: {
    type: String,
    required: true,
    maxlength: [50, "maximum 50 letters"],
    trim: true,
  },
  Skills: {
    type: String,
    required: true,
    maxlength: [50, "maximum 50 letters"],
    trim: true,
  },
  // Date_Posted: {
  //   type: String,
  //   required: true,
  //   maxlength: [50, "maximum 50 letters"],
  //   trim: true,
  // },
  Job_Description: {
    type: String,
    required: true,
    maxlength: [50, "maximum 50 letters"],
    trim: true,
  },
  Date_of_expiry: {
    type: String,
    required: true,
    maxlength: [50, "maximum 50 letters"],
    trim: true,
  },

  Vaccany: {
    type: Number,
    required: true,
    maxlength: [50, "maximum 50 letters"],
    trim: true,
  },
});

module.exports = mongoose.model("job", JobSchema);
