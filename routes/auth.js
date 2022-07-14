const router = require('express').Router();
const bcrypt = require('bcryptjs');

// Models 
const User = require('../models/User');

// Register
router.post("/register", async (req, res) => {
  try {
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const { username, email, password } = req.body;
    
     // Create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword
   });
   
   // Save new user and return response
    const user = await newUser.save();
    res.status(200).json(user);
  } catch(err){
   console.log(err);
  }
})

module.exports = router;