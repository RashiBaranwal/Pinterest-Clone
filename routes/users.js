const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/pinterest");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String

  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'posts'
  }],
  dp: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  fullname: {
    type: String,
    required: true,
  },
});

userSchema.plugin(plm);

module.exports = mongoose.model('user', userSchema);

