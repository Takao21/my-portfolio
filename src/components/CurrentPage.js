import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { SkillsPage } from "../pages/SkillsPage";
import "./CurrentPage.css";

export const CurrentPage = () => {
  return (
    <div className="CurrentPage">
      <Switch>
        <Route exact path="/work">
          <p>Work</p>
        </Route>
        <Route exact path="/skills">
          <SkillsPage />
        </Route>
        <Route exact path="/contact">
          <p>Contact</p>
        </Route>
        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
};
