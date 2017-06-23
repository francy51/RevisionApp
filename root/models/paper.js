const mongoose = require('mongoose');

// User Schema
const paperSchema = mongoose.Schema({
  Board:{
    type:String,
    required:true
  },
  Subject:{
    type:String,
    required:true
  },
  Exam:{
    type:String,
    required:true
  },
  Year:{
    type: Number,
    required:true
  },
  Month:{
    type: String,
    required:true
  },
  PaperNumber:{
    type:Number,
    required:true,
  },
  Questions:{
    type:String,
    required:true
  }
});

const paper = module.exports = mongoose.model('Paper', paperSchema);
