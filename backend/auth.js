const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET
const User = require('./db.js')

const authMiddleware = async(req,res,next)=>{
  const token = req.headers.authorization.split(' ')[1];

  if(!token){
    return res.status(404).json({
      message:"TOKEN NOT FOUND"
    })
  }

  try{
    const decoded = jwt.verify(token,JWT_SECRET);
    req.userId = decoded.userId;
    next();
  }
  catch(err){
    return res.json({err})
  }
}

module.exports = authMiddleware