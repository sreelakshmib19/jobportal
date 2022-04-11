const mongoose = require("mongoose");
const EmployerSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
    maxlength: [50, "maximum 50 letters"],
    trim: true,
    unique: [true, "The Email is already exist"],
  },
  Contact_number: {
    type: Number,
    required: true,
    maxlength: [10, "maximum 10 numbers"],
    trim: true,
  },
  company_name: {
    type: String,
    required: true,
    maxlength: [50, "maximum 50 letters"],
    trim: true,
  },
  Designation_Name: {
    type: String,
    required: true,
    maxlength: [50, "maximum 50 letters"],
    trim: true,
  },
  inputEmail: {
    type: String,
    required: true,
    maxlength: [50, "maximum 50 letters"],
    trim: true,
    unique: [true, "The Email is already exist"],
  },
  password: {
    type: String,
    required: [true, "must provide password"],
    maxlength: [250, "password cannot be more than 125 characters"],
    trim: true,
  },
  compant_type: {
    type: String,
    required: [true, "must provide job_status"],
    trim: true,
  },
  city: {
    type: String,
    required: true,
    maxlength: [50, "maximum 50 letters"],
    trim: true,
  },
  state: {
    type: String,
    required: true,
    maxlength: [50, "maximum 50 letters"],
    trim: true,
  },
  bio: {
    type: String,
    trim: true,
  },
  company_image: {
    type: String,
  },
  link: {
    type: String,
    maxlength: [50, "maximum 50 letters"],
  },
  established: {
    type: Number,
    maxlength: [50, "maximum 50 letters"],
  },
  sector: {
    type: String,
    maxlength: [50, "maximum 50 letters"],
  },
});

module.exports = mongoose.model("employer", EmployerSchema);
