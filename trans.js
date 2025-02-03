const axios = require('axios');

// Translation function
const translateText = async (text, targetLang) => {
  try {
    const apiUrl = 'https://translate.googleapis.com/translate_a/single';
    const response = await axios.get(apiUrl, {
      params: {
        client: 'gtx',  // Google Translate client identifier
        sl: 'auto',     // Source language (auto-detect)
        tl: targetLang, // Target language
        dt: 't',        // Return translation text
        q: text,        // Text to be translated
      },
    });

    // Print the response to see if it contains the translated text
    console.log(response.data);  // Inspect the structure of the response
    return response.data[0][0][0]; // Adjust based on Google's response structure
  } catch (error) {
    console.error('Error during translation:', error);
    return null;
  }
};

// Test the function independently
const testTranslation = async () => {
  const textToTranslate = 'Hello, how are you?'; // Text you want to translate
  const translatedText = await translateText(textToTranslate, 'es'); // Translate to Spanish
  console.log('Translated Text:', translatedText); // Should print "Hola, ¿cómo estás?"
};

testTranslation();
