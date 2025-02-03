const Faq = require('../models/faq'); // Import the Faq model
const { translateText } = require('../services/translationService'); // Import the translateText function

const getFaqs = async (req, res) => {
  try {
    console.log('Fetching FAQs...');
    const faqs = await Faq.find();  // Fetch FAQs from the database

    const { lang } = req.query;  // Get the language from the query parameters
    console.log('Language:', lang);

    if (lang) {
      // Translate each FAQ question and answer
      for (let faq of faqs) {
        console.log(`Translating question: ${faq.question} | answer: ${faq.answer}`);
        faq.question = await translateText(faq.question, lang);
        faq.answer = await translateText(faq.answer, lang);
      }
    }

    res.status(200).json(faqs); // Send translated FAQs as the response
  } catch (err) {
    console.error('Error fetching FAQs:', err);
    res.status(500).send('Server Error');
  }
};

module.exports = { getFaqs };
