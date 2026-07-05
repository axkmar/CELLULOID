const mongoose = require('mongoose');
await mongoose.connect("mongodb://localhost:27017/celluloid");

const userSchema = new Schema({
  username:{
    type:String,
    required:true,
    minLength:8,
    maxLength:16,
    trim:true
  },
  password:{
    type:String,
    required:true,
    minLength:10,
    maxLength:50
  },
  films:{
    type:String,
    required:true,
  },
  reviews:{
    type:String,
    required:true
  }
})

const movieSchema = new Schema({
  title:{
    type:String,
    required:true
  },
  rating:{
    type:Number,
    required:true
  }
})