import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="NavBar">
      {/* DeskTop View */}
      <div className="desktop-nav container-fluid">
        <div className="row">
          <div className="col-3 text-center">
            <Link
              className="my-nav-link"
              to={process.env.REACT_APP_PUBLIC_URL + "/"}
            >
              Biography
            </Link>
          </div>
          <div className="col-3 text-center">
            <Link className="my-nav-link" to="/skills">
              Skills & Knowledge
            </Link>
          </div>
          <div className="col-3 text-center">
            <Link className="my-nav-link" to="/resume">
              Résumé
            </Link>
          </div>
          <div className="col-3 text-center">
            <Link className="my-nav-link" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
