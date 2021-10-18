import React from "react";
import "./ContactPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

export const ContactPage = () => {
  return (
    <div className="ContactPage">
      <div className="contact-head">
        <div className="colorful-shade"></div>
        <h1 className="contact-head-text">
          If you want to contact me for work, please use the following ...
        </h1>
      </div>
      <div className="contact-body container-fluid text-center">
        <div className="row justify-content-around">
          <div className="col-3 contact-card contact-phone">
            <h2>
              <FontAwesomeIcon icon={faPhoneAlt} /> Phone
            </h2>
            <p>+95 9 95 550 1280</p>
          </div>
          <div className="col-3 contact-card contact-email">
            <h2>
              <FontAwesomeIcon icon={faEnvelope} /> Email
            </h2>
            <p>dragon.takao21@gmail.com</p>
          </div>
          <div className="col-3 contact-card contact-socialmedia">
            <h2>
              <FontAwesomeIcon icon={faLinkedin} /> Linkedin
            </h2>
            <p>
              <a
                href="https://www.linkedin.com/in/takao21"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Go To Profile</strong>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="contact-tail text-center">
        <h2>
          <span className="tail-word-1">HAVE </span>
          <span className="tail-word-2">A </span>
          <span className="tail-word-3">GOOD </span>
          <span className="tail-word-4">DAY!</span>
        </h2>
      </div>
    </div>
  );
};
