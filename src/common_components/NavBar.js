import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const NavBar = ({ activePage, setActivePage }) => {
  return (
    <div className="NavBar">
      {/* DeskTop View */}
      <div className="desktop-nav container-fluid">
        <div className="row justify-content-around">
          <div className="col-2 text-center">
            <Link
              className={
                activePage === "/"
                  ? "my-nav-link active-nav-link"
                  : "my-nav-link"
              }
              onClick={() => setActivePage("/")}
              to={process.env.REACT_APP_PUBLIC_URL + "/"}
            >
              <FontAwesomeIcon icon={faHome} /> Portfolio
            </Link>
          </div>
          <div className="col-2 text-center">
            <Link
              className={
                activePage === "/background"
                  ? "my-nav-link active-nav-link"
                  : "my-nav-link"
              }
              onClick={() => setActivePage("/background")}
              to={process.env.REACT_APP_PUBLIC_URL + "/background"}
            >
              Background
            </Link>
          </div>
          <div className="col-2 text-center">
            <Link
              className="logo-link"
              onClick={() => setActivePage("/")}
              to={process.env.REACT_APP_PUBLIC_URL + "/"}
            >
              <img
                className="nav-logo"
                src={process.env.REACT_APP_PUBLIC_URL + "/pictures/logo.png"}
                alt=""
              />
            </Link>
          </div>
          <div className="col-2 text-center">
            <Link
              className={
                activePage === "/resume"
                  ? "my-nav-link active-nav-link"
                  : "my-nav-link"
              }
              onClick={() => setActivePage("/resume")}
              to={process.env.REACT_APP_PUBLIC_URL + "/resume"}
            >
              Résumé
            </Link>
          </div>
          <div className="col-2 text-center">
            <Link
              className={
                activePage === "/contact"
                  ? "my-nav-link active-nav-link"
                  : "my-nav-link"
              }
              onClick={() => setActivePage("/contact")}
              to={process.env.REACT_APP_PUBLIC_URL + "/contact"}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
