import React from "react";
import "./NewsLetter.css";
import SendIcon from "@mui/icons-material/Send";

function NewsLetter() {
  return (
    <div className="newsletter-container">
      <h1> Newsletter</h1>
      <div className="newsletter-desc">
        Stay fashion-forward with our weekly newsletter featuring the latest
        trends, new arrivals, and exclusive discounts.
      </div>
      <div className="input-container">
        <input placeholder="Email Address" />
        <button>
          <SendIcon />
        </button>
      </div>
    </div>
  );
}

export default NewsLetter;
