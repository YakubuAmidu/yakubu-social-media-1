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
   res.status(500).json(err);
   console.log("Server error");
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email
    });

    if(!user){
      res.status(404).json("User not found...");
    } 

   const validPassword = await bcrypt.compare(req.body.password, user.password);

   if(!validPassword){
    res.status(400).json("Password do not match...");
   };

   res.status(200).json(user);

  } catch(err) {
    res.status(500).json(err);
    console.log("Server error");
  }
})

module.exports = router;