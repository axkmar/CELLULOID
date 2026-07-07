const mongoose = require('mongoose');
const { boolean } = require('zod');
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
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  },
  title:{
    type:String,
    required:true
  },
  watchDate:{
    type:Date,
    required:true
  },
  review:{
    type:String,
    required:true
  },
  like:{
    type:Boolean,
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