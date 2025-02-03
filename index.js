const express = require('express');
const connectDB = require('./config/db');  // Path to DB connection
const faqRoutes = require('./routes/faqRoutes');  // Path to routes file

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());  // To parse incoming JSON data

// Routes
app.use('/api/faq', faqRoutes);  // Use the FAQ routes for fetching FAQs

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
