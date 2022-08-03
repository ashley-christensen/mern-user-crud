const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
 name: {
  type: String,
  required: true,
 },
 age: {
  type: Number,
  required: true,
 },
 username: {
  type: String,
  required: true,
 }
});

//creates a collection called 'users' and give it UserSchema
const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
