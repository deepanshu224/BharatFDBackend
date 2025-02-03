// services/translationService.js

const axios = require('axios');

const translateText = async (text, targetLang) => {
  try {
    console.log(`Translating to: ${targetLang}`);
    const apiUrl = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=' + targetLang + '&dt=t&q=' + encodeURIComponent(text);

    const response = await axios.get(apiUrl);
    
    console.log('Translated Text:', response.data[0][0][0]); // Check if translation is correct
    return response.data[0][0][0];  // Return the translated text
  } catch (error) {
    console.error('Error during translation:', error);
    throw new Error('Translation failed');
  }
};

module.exports = { translateText };
