import React from "react";
import "./ResumeEducation.css";

export const ResumeEducation = ({ education }) => {
  return (
    <div className="ResumeEducation education-section">
      <h2 className="section-title">Education</h2>
      {education
        .sort((a, b) => b.index - a.index) //  sort in reverse chronological order using the simplified indices in the API
        .map((data) => (
          <div className="education-details-segment" key={data.index}>
            <h3>
              {data.fieldOfStudy}, {data.facility}, {data.location}
            </h3>
            <h4 className="timespan-text">
              {data.fromDate} - {data.toDate || "Present"}
            </h4>
            <p>{!!data.notes.length && "*" + data.notes}</p>
          </div>
        ))}
    </div>
  );
};