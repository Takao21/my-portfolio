import React from "react";
import "./ResumePage.css";
import { resume } from "../_fake-api/api_getResume";
import { ResumeProfile } from "../components/ResumeProfile";
import { ResumeWorkHistory } from "../components/ResumeWorkHistory";
import { ResumeEducation } from "../components/ResumeEducation";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ResumePage = () => {
  // placeholder API
  const api_getResume = resume;

  return (
    <div className="ResumePage">
      <img className="bg-sprite" src="/pictures/hacker_sprite.png" alt="" />
      <div className="resume-name-div container-fluid mt-3">
        <p>{api_getResume.name}</p>
      </div>
      <hr />
      <div className="resume-body-wrapper container-fluid">
        <div className="row body-flex-container justify-content-between">
          <div className="resume-body-main col-8">
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
              <p className="resumeside-title">Contact</p>
              <p>
                {/* eslint-disable-next-line */}
                <FontAwesomeIcon
                  className="resumeside-icon"
                  icon={faEnvelope}
                />
                dragon.takao21@gmail.com
              </p>
              <p>
                <FontAwesomeIcon
                  className="resumeside-icon"
                  icon={faPhoneAlt}
                />
                +95 9 95 550 1280
              </p>
            </div>
            <hr />

            <div className="skills-section">
              <p className="resumeside-title">Skills</p>
              <ul>
                <li>HTML, CSS, JavaScript</li>
                <li>React.js</li>
                <li>Critical Thinking</li>
                <li>Problem Solving</li>
              </ul>
            </div>
            <hr />

            <div className="languages-section">
              <p className="resumeside-title">Languages</p>
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
