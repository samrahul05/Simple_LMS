const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../Modules/User')
const verifyToken = require('../verifytoken')


const Signup = async (req,res) => {
    const data = new User({
        ...req.body,
        password:bcrypt.hashSync(req.body.password,10), 
    })
    const {emailOrPhone} =req.body
    const existingUser =await User.findOne({ emailOrPhone } )
    if(existingUser)
    {
        res.json("Email is Already Existing")
    }
    else
    {
        await data.save()
        .then(()=>{
            
            res.json('Signup successfull')
        })
        .catch(()=>{
            res.json("Something Worng");
        })
    }
}
 

const Login = async (req, res) => {
    const { emailOrPhone, password } = req.body;
    
  
    try {
      const user = await User.findOne({ emailOrPhone });
      console.log(user)
  
      if (!user) {
        return res.status(400).json({ message: 'Invalid email' });
      }
  
      const passwordMatch = bcrypt.compareSync(password, user.password);
    
  
      if (!passwordMatch) {
        return res.json({ message: 'Invalid password' });
      }
  
      const token = jwt.sign(
        { id: user._id, emailOrPhone: user.emailOrPhone },
        process.env.secretkey,
        {
          expiresIn: '1h'
        }
      );
  
      res.cookie('jwt', token, { httpOnly: true });
  
      return res.json({ success: `${user.name} Login successful`, token });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  




module.exports={Signup,Login}