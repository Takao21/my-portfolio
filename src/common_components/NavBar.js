import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="NavBar">
      {/* DeskTop View */}
      <div className="desktop-nav container-fluid">
        <div className="row justify-content-around">
          <div className="col-2 text-center">
            <Link
              className="my-nav-link"
              to={process.env.REACT_APP_PUBLIC_URL + "/"}
            >
              Biography
            </Link>
          </div>
          <div className="col-2 text-center">
            <Link
              className="my-nav-link"
              to={process.env.REACT_APP_PUBLIC_URL + "/skills"}
            >
              Skills
            </Link>
          </div>
          <div className="col-2 text-center">
            <Link
              className="logo-link"
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
              className="my-nav-link"
              to={process.env.REACT_APP_PUBLIC_URL + "/resume"}
            >
              Résumé
            </Link>
          </div>
          <div className="col-2 text-center">
            <Link
              className="my-nav-link"
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
