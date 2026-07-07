const express = require('express')
const jwt = require('jsonwebtoken');
const zod = require('zod')
const Router = express.Router();
const { User } = require('../db.js')
const JWT_SECRET = process.env.JWT_SECRET

const signupSchema = zod.object({
  username:zod.string(),
  password:zod.string(),
  email:zod.string()
})

const signinSchema = zod.object({
  username:zod.string(),
  password:zod.string()
})

const updateSchema = zod.object({
  username:zod.string().optional(),
  password:zod.string().optional(),
  email:zod.string().optional()
})

Router.put('/',authMiddleware,async(req,res)=>{
  const {success} = updateSchema.safeParse(req.body);

  if(!success){
    res.status().json({
      message:"Invalid Data"
    })
  }

  await User.updateOne({_id:req.userId},req.body);

  return res.status(200).json({
    message:"Updated Succesfully"
  })
})

Router.post('/signup',async(req,res)=>{
  const {success} = signupSchema.safeParse(req.body);

  if(!success){
    return res.status(422).json({
      message:"Invalid Credentials"
    })
  }

  const existingUser = await User.findOne({
    username:req.body.username
  })

  if(existingUser){
    return res.status(409).json({
      message:"User already Existing.."
    })
  }

  const user = await User.create({
    username:req.body.username,
    password:req.body.password,
    email:req.body.email,
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
  const {success} = signinSchema.safeParse(req.body);

  if(!success){
    return res.status(422).json({
      message:"Invalid Credentials"
    })
  }

  const existingUser = await User.findOne({
    username:req.body.username
  })

  if(!existingUser){
    return res.status(404).json({
      message:"User Not Found"
    })
  }

  const userId = existingUser._id

  const token = jwt.sign({
    userId
  },JWT_SECRET)

  return res.json({
    message:"Signed In!",
    token:token
  })
})

module.exports = Router