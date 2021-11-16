import React from "react";
import "./ResumeEducation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

export const ResumeEducation = ({ education }) => {
  return (
    <div className="ResumeEducation subsection education-section">
      <p className="section-title">
        <FontAwesomeIcon icon={faSchool} /> Education
      </p>
      {education
        .sort((a, b) => b.index - a.index) //  sort in reverse chronological order using the simplified indices in the API
        .map((data) => (
          <div
            className="subsection-data education-details-segment"
            key={data.index}
          >
            <p className="sub-header">
              {data.fieldOfStudy}, {data.facility}, {data.location}
            </p>
            <p className="timespan-text">
              <FontAwesomeIcon icon={faCalendarAlt} /> {data.fromDate} -{" "}
              {data.toDate || "Present"}
            </p>
            <p>{!!data.notes.length && "*" + data.notes}</p>
          </div>
        ))}
    </div>
  );
};
