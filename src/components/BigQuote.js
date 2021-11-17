import React from "react";
import "./BigQuote.css";

export const BigQuote = () => {
  return (
    <div className="BigQuote quote-div text-center">
      <blockquote className="my-quote">
        Don't get bothered by what you can't control. Focus on what you can do.
        <footer className="quote-footer">Takao</footer>
      </blockquote>
    </div>
  );
};
