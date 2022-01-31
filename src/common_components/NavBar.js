import React, { useEffect } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faThList,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import NavBrand from "../_fake-api/images/nav-brand.avif";

export const NavBar = ({ activePage, setActivePage, openNav, setOpenNav }) => {
  useEffect(() => {
    const menu = document.getElementsByClassName("menu-layer")[0];
    menu &&
      menu.addEventListener("click", (e) => {
        const target = e.target.className;
        if (target === "menu-layer") {
          e.stopPropagation();
        }
      });
  }, [openNav]);

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
              <img
                className="nav-logo"
                src={NavBrand}
                alt="navigation bar logo"
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

      {/* Mobile View */}
      <div className="d-block d-md-none mobile-nav container-fluid">
        <Link className="nav-logo" to="/">
          <img className="nav-logo" src={NavBrand} alt="navigation bar logo" />
        </Link>
        {!openNav && (
          <span className="toggle-menu-button" onClick={() => setOpenNav(true)}>
            <FontAwesomeIcon icon={faThList} />
          </span>
        )}
        {openNav && (
          <div className="menu-layer">
            <div
              className="close-menu-container"
              onClick={() => setOpenNav(false)}
            >
              <span className="close-menu-button">
                <FontAwesomeIcon icon={faSignOutAlt} />
              </span>
            </div>
            <Link
              onClick={() => {
                setActivePage("/");
                setOpenNav(false);
              }}
              to={"/"}
              className="nav-button"
            >
              <span
                className={
                  activePage === "/"
                    ? "my-nav-link active-nav-link"
                    : "my-nav-link"
                }
              >
                Portfolio <FontAwesomeIcon icon={faHome} />
              </span>
            </Link>
            <Link
              onClick={() => {
                setActivePage("/background");
                setOpenNav(false);
              }}
              to={"/background"}
              className="nav-button"
            >
              <span
                className={
                  activePage === "/background"
                    ? "my-nav-link active-nav-link"
                    : "my-nav-link"
                }
              >
                Background
              </span>
            </Link>
            <Link
              onClick={() => {
                setActivePage("/resume");
                setOpenNav(false);
              }}
              to={"/resume"}
              className="nav-button"
            >
              <span
                className={
                  activePage === "/resume"
                    ? "my-nav-link active-nav-link"
                    : "my-nav-link"
                }
              >
                Résumé
              </span>
            </Link>
            <Link
              onClick={() => {
                setActivePage("/contact");
                setOpenNav(false);
              }}
              to={"/contact"}
              className="nav-button"
            >
              <span
                className={
                  activePage === "/contact"
                    ? "my-nav-link active-nav-link"
                    : "my-nav-link"
                }
              >
                Contact
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
