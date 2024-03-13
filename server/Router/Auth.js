const express = require('express')
const router = express.Router()
const {Signup,Login} =require('../Controller/Auth')
// const verifyToken = require('../verifytoken')
// const jwt = require('jsonwebtoken')



router.post('/signup',Signup)
router.post('/login',Login)






module.exports=router