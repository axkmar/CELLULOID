const express = require('express')
const zod = require('zod');
const { User, Movie } = require('../db');
const authMiddleware = require('../../../Paytm-CLone/paytm/backend/middleware');
const Router = express.Router();

const movieSchema = zod.object({
  title:zod.string(),
  watchDate:zod.date().optional(),
  review:zod.string().optional(),
  rating:zod.number().optional(),
  like:zod.boolean().optional()
})

const updateSchema = zod.object({
  atchDate:zod.date().optional(),
  review:zod.string().optional(),
  rating:zod.number().optional(),
  like:zod.boolean().optional()
})

Router.put('/',authMiddleware,async(req,res)=>{
  const {success} = updateSchema.safeParse(req.body);

  if(!success){
    res.status().json({
      message:"Invalid Details"
    })
  }

  await Movie.updateOne({_id:req.userId},req.body)

  res,json({
    Message:"Review Updated Succesfully"
  })
})

Router.post('/log',authMiddleware,async(req,res)=>{
  const {success} = movieSchema.safeParse(req.body)

  if(!success){
    res.status().json({
      message:"Invalid Details"
    })
  }

  const movie = await new Movie({
    user:req.userId, //now many movies can be saved under same objectId(same user)
    title:req.body.title,
    watchDate:req.body.date,
    review:req.body.review,
    rating:req.body.rating,
    like:req.body.like
  })

  return res.status(200).json({
    message:"Review Saved"
  })
})

Router.get('/log',authMiddleware,(req,res)=>{
  const movie = await Movie.findOne({_id:req.userId})

  if(!movie){
    return res.status(404).json({
      message:"Something went Wrong"
    })
  }

  res.status(200).json({
    movie:movie
  })
})

Router.delete('/log',authMiddleware,async(req,res)=>{
  await Movie.deleteOne({_id:req.userId})

  return res.json({
    message:"Deleted Succesfully"
  })
})


module.exports = Router