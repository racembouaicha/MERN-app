const express = require('express');
const User = require('../models/userModel')
// controller functions for
const { singupUser , loginUser} = require('../controllers/userController')
 
const router = express.Router();

// login route
router.post('/login',loginUser)

// signup route 
router.post('/singup',singupUser)


module.exports = router 