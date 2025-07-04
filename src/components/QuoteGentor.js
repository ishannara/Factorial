import React, { useState } from "react";

const quotes = [
  "“The best way to get started is to quit talking and begin doing.” – Walt Disney",
  "“Success is not in what you have, but who you are.” – Bo Bennett",
  "“Don’t let yesterday take up too much of today.” – Will Rogers",
  "“The only limit to our realization of tomorrow is our doubts of today.” – F.D. Roosevelt",
  "“Do one thing every day that scares you.” – Eleanor Roosevelt",
  "“Your time is limited, don’t waste it living someone else’s life.” – Steve Jobs",
  "“Push yourself, because no one else is going to do it for you.” – Unknown",
];

function QuoteGentor() {
  const [quote, setQuote] = useState("");

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h2>💬 Random Quote Generator</h2>
      <button
        onClick={generateQuote}
        style={{ padding: "10px 20px", marginBottom: "20px" }}
      >
        Generate Quote
      </button>
      {quote && (
        <div
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            borderRadius: "10px",
          }}
        >
          <p style={{ fontStyle: "italic" }}>{quote}</p>
        </div>
      )}
    </div>
  );
}

export default QuoteGentor;
