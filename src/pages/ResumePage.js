import React from "react";
import "./ResumePage.css";

export const ResumePage = () => {
  return (
    <div className="ResumePage">
      <div className="resume-name-div">
        <h1>Aung Kaung Khant</h1>
      </div>
      <hr />
      <div className="resume-body-wrapper container-fluid">
        <div className="row">
          <div className="resume-body-side col-3"></div>
          <div className="resume-body-main col-9"></div>
        </div>
      </div>
    </div>
  );
};
