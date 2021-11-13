import React from "react";
import "./ResumeProfile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

export const ResumeProfile = ({ profileDescription }) => {
  return (
    <div className="ResumeProfile subsection profile-section">
      <p className="section-title">
        <FontAwesomeIcon icon={faUserCircle} /> Profile
      </p>
      <p>{profileDescription}</p>
    </div>
  );
};
