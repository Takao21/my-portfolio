import React from "react";
import { Link } from "react-router-dom";
import "./PageFooter.css";

export const PageFooter = ({ setActivePage }) => {
  return (
    <div className="PageFooter text-center">
      <div className="links-row text-center">
        <Link
          className="contact-me-link"
          onClick={() => setActivePage("/resume")}
          to="/resume"
        >
          Go To Résumé
        </Link>
        <span className="mx-5">|</span>
        <Link
          className="contact-me-link"
          onClick={() => setActivePage("/contact")}
          to="/contact"
        >
          Contact Me
        </Link>
      </div>

      <p className="mt-3">
        Portfolio &copy; Aung Kaung Khant, 2022, Images comply with Fair Use
        Act.
      </p>
    </div>
  );
};
