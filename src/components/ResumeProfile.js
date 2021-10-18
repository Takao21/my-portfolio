import React from "react";
import "./ResumeProfile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

export const ResumeProfile = ({ profileDescription }) => {
  return (
    <div className="ResumeProfile subsection profile-section">
      <h2 className="section-title">
        <FontAwesomeIcon icon={faUserCircle} /> Profile
      </h2>
      <p>{profileDescription}</p>
    </div>
  );
};
