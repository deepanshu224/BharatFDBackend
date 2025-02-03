const mongoose = require('mongoose');
const Faq = require('./models/faq');  // Path to the FAQ model

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://deepanshu22april:EejABVeufY9MUvzT@cluster0.diuos.mongodb.net/myname?retryWrites=true&w=majority&appName=Cluster0", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');

    // Create test FAQ data
    const faq1 = new Faq({
      question: 'What is MERN?',
      answer: 'MERN stands for MongoDB, Express.js, React, and Node.js.',
    });

    const faq2 = new Faq({
      question: 'What is Express.js?',
      answer: 'Express.js is a web framework for Node.js.',
    });

    // Save the test data into MongoDB
    await faq1.save();
    await faq2.save();

    console.log('Test FAQs inserted successfully');
    mongoose.disconnect();
  } catch (err) {
    console.error('Error inserting test data:', err.message);
  }
};

connectDB();
