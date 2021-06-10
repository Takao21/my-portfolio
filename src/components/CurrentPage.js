import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import "./CurrentPage.css";

export const CurrentPage = () => {
  return (
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
      <Route exact path="/">
        <HomePage />
      </Route>
    </Switch>
  );
};
