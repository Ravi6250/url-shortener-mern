// frontend/src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState(null);
  const [error, setError] = useState('');

  // Hamare backend server ka URL
  const API_BASE_URL = 'http://localhost:5000';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setShortUrl(null);

    try {
      const response = await axios.post(`${API_BASE_URL}/shorten`, {
        original_url: originalUrl,
      });
      setShortUrl(response.data);
    } catch (err) {
      setError('Failed to shorten URL. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="Enter a long URL to shorten"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          required
        />
        <button type="submit">Shorten URL</button>
      </form>

      {error && <p className="error">{error}</p>}

      {shortUrl && (
        <div className="result">
          <p>Shortened URL:</p>
          <a
            href={`${API_BASE_URL}/${shortUrl.short_code}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {`${API_BASE_URL}/${shortUrl.short_code}`}
          </a>
        </div>
      )}
    </div>
  );
}

export default App;