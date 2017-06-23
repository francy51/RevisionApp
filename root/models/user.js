const mongoose = require('mongoose');

// User Schema
const UserSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true,
    unique: true,
    index:true
  },
  username:{
    type: String,
    required: true,
    unique:true,
    index: true
  },
  password:{
    type: String,
    required: true
  },
  point:{
    type:Number
  }
});

const User = module.exports = mongoose.model('User', UserSchema);
