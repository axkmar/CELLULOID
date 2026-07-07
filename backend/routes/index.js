const express = require('express')
const Router = express.Router();

const profileRouter = require('./profile.js');
const moviesRouter = require('./movies.js')

Router.use('/profile',profileRouter);
Router.use('/movies',moviesRouter);

module.exports = Router