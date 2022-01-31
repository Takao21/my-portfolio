import React from "react";
import "./BigQuote.css";

export const BigQuote = () => {
  return (
    <div className="BigQuote quote-div text-center">
      <blockquote className="my-quote">
        To know is to know that you know nothing. That is the true meaning of
        knowledge.
        <footer className="quote-footer">Socrates</footer>
      </blockquote>
    </div>
  );
};
