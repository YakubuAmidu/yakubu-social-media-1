const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require('helmet');
const dotenv = require('dotenv');

dotenv.config();

// Database connection
mongoose.connect(process.env.MONGO_URL, (err) => {
  if(err)  
  console.log(err)
    else console.log('Mongodb connected...👍');
});

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

// Routes
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

const port = 3000 || 5000;

app.listen(port, () => {
  console.log("Server connected...👍");
});