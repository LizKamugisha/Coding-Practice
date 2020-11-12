// Connect to MongoDB
const mongoose = require('mongoose');

// Define a Mongoose Schema
const registrationSchema = new mongoose.Schema({
    userid: {
      type: String,
      unique: true,
      required: 'Please enter username',
    },
    pwd: {
      type: String,
      required: 'Please enter password',
    },
    selectRole: String,

  });
  
  // Create Model & Export it
  module.exports = mongoose.model('Registration', registrationSchema);