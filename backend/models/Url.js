// backend/models/Url.js
const mongoose = require('mongoose');
const shortid = require('shortid');

const urlSchema = new mongoose.Schema({
  original_url: {
    type: String,
    required: true,
  },
  short_code: {
    type: String,
    required: true,
    default: shortid.generate, // Generate a unique short code by default
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
}, { timestamps: true }); // Adds created_at and updated_at fields automatically

module.exports = mongoose.model('Url', urlSchema);