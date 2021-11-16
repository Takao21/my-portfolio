import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faThList,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

export const NavBar = ({ activePage, setActivePage, openNav, setOpenNav }) => {
  return (
    <div className="NavBar">
      {/* DeskTop View */}
      <div className="d-none d-md-block desktop-nav container-fluid">
        <div className="row justify-content-around">
          <div className="col-2 text-center">
            <Link
              className={
                activePage === "/"
                  ? "my-nav-link active-nav-link"
                  : "my-nav-link"
              }
              onClick={() => setActivePage("/")}
              to={"/"}
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
              to={"/background"}
            >
              Background
            </Link>
          </div>
          <div className="col-2 text-center">
            <Link
              className="logo-link"
              onClick={() => setActivePage("/")}
              to={"/"}
            >
              <img className="nav-logo" src="/pictures/logo.png" alt="" />
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
              to={"/resume"}
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
              to={"/contact"}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="d-block d-md-none mobile-nav container-fluid">
        <Link className="nav-logo" to="/">
          <img className="nav-logo" src="/pictures/logo.png" alt="" />
        </Link>
        <span className="toggle-menu-button" onClick={() => setOpenNav(true)}>
          <FontAwesomeIcon icon={faThList} />
        </span>
        {openNav && (
          <div className="menu-layer">
            <p className="close-menu-button" onClick={() => setOpenNav(false)}>
              <FontAwesomeIcon icon={faSignOutAlt} />
            </p>
            <p>
              <Link
                className={
                  activePage === "/"
                    ? "my-nav-link active-nav-link"
                    : "my-nav-link"
                }
                onClick={() => {
                  setActivePage("/");
                  setOpenNav(false);
                }}
                to={"/"}
              >
                Portfolio
              </Link>
            </p>
            <p>
              <Link
                className={
                  activePage === "/background"
                    ? "my-nav-link active-nav-link"
                    : "my-nav-link"
                }
                onClick={() => {
                  setActivePage("/background");
                  setOpenNav(false);
                }}
                to={"/background"}
              >
                Background
              </Link>
            </p>
            <p>
              <Link
                className={
                  activePage === "/resume"
                    ? "my-nav-link active-nav-link"
                    : "my-nav-link"
                }
                onClick={() => {
                  setActivePage("/resume");
                  setOpenNav(false);
                }}
                to={"/resume"}
              >
                Resume
              </Link>
            </p>
            <p>
              <Link
                className={
                  activePage === "/contact"
                    ? "my-nav-link active-nav-link"
                    : "my-nav-link"
                }
                onClick={() => {
                  setActivePage("/contact");
                  setOpenNav(false);
                }}
                to={"/contact"}
              >
                Contact
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
