import React from "react";
import "./BigQuote.css";

export const BigQuote = () => {
  return (
    <div className="BigQuote quote-div text-center">
      <blockquote className="my-quote">
        The only true wisdom is in knowing that you know nothing.
        <footer className="quote-footer">Socrates</footer>
      </blockquote>
    </div>
  );
};
