var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: String,
  age: Number,
  address: String,
  balance: Number,
  isLoggedIn: { type: Boolean, default:false},
});


module.exports = mongoose.model('User', UserSchema);
