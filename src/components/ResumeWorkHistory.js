import React from "react";
import "./ResumeWorkHistory.css";

export const ResumeWorkHistory = ({ workHistory }) => {
  return (
    <div className="ResumeWorkHistory workhistory-section">
      <h2 className="section-title">Work History</h2>
      {workHistory
        .sort((a, b) => a.index - b.index)
        .map((work) => (
          <div className="work-details-segment" key={work.index}>
            <h3>
              {work.position}, {work.company}, {work.location}
            </h3>
            <h4 className="timespan-text">
              {work.fromDate} - {work.toDate || "Present"}
            </h4>
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
