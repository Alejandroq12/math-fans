import { useState, useEffect } from 'react';
import axios from 'axios';

function QuoteDisplay() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get('https://api.api-ninjas.com/v1/quotes?category=happiness', {
          headers: { 'X-Api-Key': '/8HY4KlsVCA5B69kB4GDfw==G6WPzahEUAgdyVM1' },
        });
        setQuote(response.data[0]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="quote-container">
      {loading && <p className="quote-loading">Loading...</p>}
      {error && (
        <p className="quote-error">
          Error:
          {error.message}
        </p>
      )}
      {quote && (
      <div>
        <p className="quote-text">
          {`"${quote.quote}"`}
        </p>
        <p className="quote-author">
          -
          {quote.author}
        </p>
      </div>
      )}
    </div>
  );
}

export default QuoteDisplay;
