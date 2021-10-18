import React from "react";
import "./ContactPage.css";
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
            <h2>Phone</h2>
            <p>+95 9 95 550 1280</p>
          </div>
          <div className="col-3 contact-card contact-email">
            <h2>Email</h2>
            <p>dragon.takao21@gmail.com</p>
          </div>
          <div className="col-3 contact-card contact-socialmedia">
            <h2>Linkedin</h2>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};
