const express = require('express')
const jwt = require('jsonwebtoken');
const zod = require('zod')
const Router = express.Router();
const { User } = require('../db.js')
const JWT_SECRET = process.env.JWT_SECRET

console.log(JWT_SECRET);

const signupSchema = zod.object({
  username:zod.string(),
  password:zod.string()
})

Router.post('/signup',async(req,res)=>{
  const {success} = signupSchema.safeParse(req.body);

  if(!success){
    res.status(422).json({
      message:"Invalid Credentials"
    })
  }

  const existingUser = await User.findOne({
    username:req.body.username
  })

  if(existingUser){
    res.status(409).json({
      message:"User already Existing.."
    })
  }

  const user = await User.create({
    username:req.body.username,
    password:req.body.password,
    films:0,
    reviews:0
  })

  const userId = user._id;

  const token = jwt.sign({
    userId
  },JWT_SECRET)

  return res.status(200).json({
    message:"User Created Successfully!",
    token:token
  })
})

Router.post('/signin',async(req,res)=>{

})

module.exports = Router