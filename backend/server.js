// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRoutes = require('./routes/api');

const app = express();

// --- Middleware ---
// Enable CORS for all routes
app.use(cors());
// Parse JSON bodies in requests
app.use(express.json());


// --- Database Connection ---
const dbURI = 'mongodb://127.0.0.1:27017/urlshortener'; // Your MongoDB connection string

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully.'))
  .catch(err => console.error('MongoDB connection error:', err));


// --- A simple test route ---
app.get('/test', (req, res) => {
    res.send('Backend server is running!');
});


// --- Start the server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// --- Routes ---
app.use('/', apiRoutes); // Mount the routes