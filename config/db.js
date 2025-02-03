const mongoose = require('mongoose');
const dotenv = require('dotenv');
//EejABVeufY9MUvzT
dotenv.config();  // Load environment variables from .env

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);  // Exit process with failure
  }
};

module.exports = connectDB;
