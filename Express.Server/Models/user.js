const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    maxlength: 32,
    trim: true,
  },

  last_name: {
    type: String,
    required: true,
    maxlength: 32,
    trim: true,
  },
});

module.exports = mongoose.model("User", userSchema);
