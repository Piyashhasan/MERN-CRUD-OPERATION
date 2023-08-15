const mongoose = require("mongoose");

// SCHEMA MAKE FOR USER
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

// MODEL MAKE
const Users = mongoose.model("usersCollections", userSchema);

module.exports = Users;
