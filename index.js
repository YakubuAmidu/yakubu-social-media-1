const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require('helmet');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_URL, () => {
  console.log('Connected to mongodb...👍');
});

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

const port = 3000 || 5000;

// Routes
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.listen(port, () => {
  console.log("Server connected...👍");
});