# FAQ Translation API

## Overview
The **FAQ Translation API** is a backend service built with **Node.js**, **Express.js**, and **MongoDB** that fetches frequently asked questions (FAQs) from a database and translates them into a specified language using an external translation API.
## Features
- Fetches FAQs from a MongoDB database.
- Supports translation of questions and answers into multiple languages.
- RESTful API with query parameters for language selection.

## Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB** (Database)
- **Axios** (For making HTTP requests to translation APIs)

## Folder Structure
```
project-root/
├── src/
│   ├── controllers/
│   │   ├── faqController.js
│   ├── models/
│   │   ├── faq.js
│   ├── services/
│   │   ├── translationService.js
│   ├── routes/
│   │   ├── faqRoutes.js
│   ├── config/
│   │   ├── db.js
│   ├── app.js
│   ├── server.js
├── package.json
├── .env
├── README.md
```

## Installation & Setup
### Prerequisites
- **Node.js** (v14 or later)
- **MongoDB** (local or cloud instance like MongoDB Atlas)

### 1. Clone the Repository
```sh
git clone https://github.com/your-repo/faq-translation-api.git
cd faq-translation-api
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the project root and configure the following:
```ini
PORT=5000
MONGO_URI=mongodb+srv://your-mongodb-uri
TRANSLATION_API=https://translate.googleapis.com/translate_a/single
```

### 4. Start the Server
```sh
npm start
```

## API Endpoints
### 1. Fetch FAQs (with optional translation)
#### Request:
```http
GET /api/faq?lang=es
```

#### Query Parameters:
| Parameter | Type   | Description |
|-----------|--------|------------|
| lang      | string | (Optional) Target language code (e.g., `es` for Spanish) |

#### Response:
```json
[
    {
        "_id": "679ffc758a60f9fd707537dd",
        "question": "¿Qué es MERN?",
        "answer": "MERN significa MongoDB, Express.js, React y Node.js."
    },
    {
        "_id": "679ffc758a60f9fd707537de",
        "question": "¿Qué es Express.js?",
        "answer": "Express.js es un marco web para Node.js."
    }
]
```



