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
          <Route exact path="/resume">
            <ResumePage />
          </Route>
          <Route exact path="/skills">
            <SkillsPage />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
          <Route exact path="/home">
            <HomePage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          {/*redirect all 404 paths to homepage*/}
          <Route>
            <HomePage />
          </Route>
        </Switch>
      </ScrollToTop>
    </div>
  );
};
