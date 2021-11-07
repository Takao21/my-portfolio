import React from "react";
import { Route, Switch } from "react-router-dom";
import { ContactPage } from "../pages/ContactPage";
import { HomePage } from "../pages/HomePage";
import { ResumePage } from "../pages/ResumePage";
import { SkillsPage } from "../pages/SkillsPage";
import ScrollToTop from "../util/ScrollToTop";
import "./CurrentPage.css";

export const CurrentPage = () => {
  return (
    <div className="CurrentPage">
      <ScrollToTop>
        <Switch>
          <Route exact path={process.env.REACT_APP_PUBLIC_URL + "/resume"}>
            <ResumePage />
          </Route>
          <Route exact path={process.env.REACT_APP_PUBLIC_URL + "/background"}>
            <HomePage />
          </Route>
          <Route exact path={process.env.REACT_APP_PUBLIC_URL + "/contact"}>
            <ContactPage />
          </Route>
          <Route exact path={process.env.REACT_APP_PUBLIC_URL + "/home"}>
            <SkillsPage />
          </Route>
          <Route exact path={process.env.REACT_APP_PUBLIC_URL + "/"}>
            <SkillsPage />
          </Route>
          <Route>
            <h1 className="text-center mt-5">Error 404: Page Not Found</h1>
            <p className="text-center">
              Please use the navigation bar to get back to existing pages.
            </p>
          </Route>
        </Switch>
      </ScrollToTop>
    </div>
  );
};
