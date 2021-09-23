import React from "react";
import "./ResumePage.css";
import { resume } from "../_fake-api/api_getResume";
import { ResumeProfile } from "../components/ResumeProfile";
import { ResumeWorkHistory } from "../components/ResumeWorkHistory";
import { ResumeEducation } from "../components/ResumeEducation";

export const ResumePage = () => {
  // placeholder API
  const api_getResume = resume;

  return (
    <div className="ResumePage">
      <div className="resume-name-div container-fluid mt-3">
        <h1>{api_getResume.name}</h1>
      </div>
      <hr />
      <div className="resume-body-wrapper container-fluid">
        <div className="row">
          <div className="resume-body-main col-9">
            <ResumeProfile
              profileDescription={api_getResume.profileDescription}
            />
            <br />
            <ResumeWorkHistory workHistory={api_getResume.workHistory} />
            <br />
            <ResumeEducation education={api_getResume.education} />
          </div>

          <div className="resume-body-side col-3">
            <div className="contact-section">
              <h2>Contact</h2>
              <p>
                <a href="#">dragon.takao21@gmail.com</a>
              </p>
              <p>+95 9 95 550 1280</p>
            </div>
            <div className="skills-section">
              <h2>Skills</h2>
              <ul>
                <li>HTML, CSS, JavaScript</li>
                <li>React.js</li>
                <li>Critical Thinking</li>
                <li>Problem Solving</li>
              </ul>
            </div>
            <div className="languages-section">
              <h2>Languages</h2>
              <ul>
                <li>Burmese</li>
                <li>English</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
