import React from "react";
import "./ResumeWorkHistory.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

export const ResumeWorkHistory = ({ workHistory }) => {
  return (
    <div className="ResumeWorkHistory subsection workhistory-section">
      <p className="section-title">
        <FontAwesomeIcon icon={faBriefcase} /> Work History
      </p>
      {workHistory
        .sort((a, b) => b.index - a.index) //  sort in reverse chronological order using the simplified indices in the API
        .map((work) => (
          <div className="work-details-segment" key={work.index}>
            <p className="sub-header">
              {work.position}, {work.company}, {work.location}
            </p>
            <p className="timespan-text">
              <FontAwesomeIcon icon={faCalendarAlt} /> {work.fromDate} -{" "}
              {work.toDate || "Present"}
            </p>
            <ul>
              {work.highlights.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};
