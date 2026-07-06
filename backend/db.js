const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/celluloid");

const User = new mongoose.Schema({
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
    type:Number,
    required:true,
  },
  reviews:{
    type:Number,
    required:true
  }
})

const Movie = new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  rating:{
    type:Number,
    required:true
  }
})

module.exports = {
  User,
  Movie
}