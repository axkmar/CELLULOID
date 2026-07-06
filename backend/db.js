const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/celluloid");

const userSchema = new mongoose.Schema({
  username:{
    type:String,
    required:true,
    minLength:8,
    maxLength:16,
    trim:true
  },
  email:{
    type:String,
    required:true,
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

const movieSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  rating:{
    type:Number,
    required:true
  }
})

const User = mongoose.model("User", userSchema);
const Movie = mongoose.model("Movie", movieSchema);

module.exports = {
  User,
  Movie
}