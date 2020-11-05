// Connect to MongoDB
const mongoose = require('mongoose');

// Define a Mongoose Schema
const registrationSchema = new mongoose.Schema({
    userid: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      required: 'Please enter password',
    },
    selectRole: 'string'

  });
  
  // Create Model & Export it
  module.exports = mongoose.model('Registration', registrationSchema);