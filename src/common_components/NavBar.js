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
            <Link className="my-nav-link" to="/">
              Home
            </Link>
          </div>
          <div className="col-3 text-center">
            <Link className="my-nav-link" to="/skills">
              Skills
            </Link>
          </div>
          <div className="col-3 text-center">
            <Link className="my-nav-link" to="/achievements">
              Achievements
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
