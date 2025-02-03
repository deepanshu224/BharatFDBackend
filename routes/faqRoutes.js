const express = require('express');
const { getFaqs } = require('../controllers/faqController');
const router = express.Router();

// GET route to fetch and translate FAQs
router.get('/', getFaqs);

module.exports = router;
