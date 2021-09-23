import React from "react";
import "./ResumeProfile.css";

export const ResumeProfile = ({ profileDescription }) => {
  return (
    <div className="ResumeProfile profile-section">
      <h2 className="section-title">Profile</h2>
      <p>{profileDescription}</p>
    </div>
  );
};
