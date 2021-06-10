import React from "react";
import { Route, Switch } from "react-router";
import { HomePage } from "../pages/HomePage";
import "./CurrentPage.css";

export const CurrentPage = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/achievements">
          <p>Achievements</p>
        </Route>
        <Route exact path="/skills">
          <p>Skills</p>
        </Route>
        <Route exact path="/contact">
          <p>Contact</p>
        </Route>
        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
};
