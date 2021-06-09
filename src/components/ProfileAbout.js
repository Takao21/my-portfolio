import "./ProfileAbout.css";
import React from "react";

export const ProfileAbout = ({ about }) => {
  return (
    <div className="ProfileAbout container-fluid col-11">
      <div className="row">
        <div className="col-12">
          <h4 className="text-center about-title">About Me</h4>
          <p className="about-body">{about}</p>
        </div>
      </div>
    </div>
  );
};
