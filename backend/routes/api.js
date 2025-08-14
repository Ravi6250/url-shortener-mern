// backend/routes/api.js
const express = require('express');
const router = express.Router();
const Url = require('../models/Url');

// Route: POST /api/shorten
// Description: Accepts a long URL and creates a short URL
router.post('/shorten', async (req, res) => {
  const { original_url } = req.body;

  // Basic validation for the URL
  if (!original_url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    // Check if the URL is already in the database
    let url = await Url.findOne({ original_url });

    if (url) {
      // If found, return the existing short URL
      return res.json(url);
    } else {
      // If not found, create a new document and save it
      const newUrl = new Url({
        original_url,
      });

      await newUrl.save();
      return res.json(newUrl);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Route: GET /:shortcode
// Description: Redirects the short URL to the original URL
router.get('/:shortcode', async (req, res) => {
  try {
    const url = await Url.findOne({ short_code: req.params.shortcode });

    if (url) {
      // Increment the click counter
      url.clicks++;
      await url.save();

      // Redirect to the original URL
      return res.redirect(url.original_url);
    } else {
      // If the short code is not found, return a 404 error
      return res.status(404).json({ error: 'No URL found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});


module.exports = router;