import React from "react";
import { ProfileBody } from "../components/ProfileBody";
import { ProfileHead } from "../components/ProfileHead";
import { devHistory } from "../_fake-api/api_devHistory";
import { basicInfo } from "../_fake-api/api_getBasicInfo";
import "./HomePage.css";

export const HomePage = () => {
  // placeholder API
  const apiBasicInfo = basicInfo;
  const apiDevHistory = devHistory;
  return (
    <div className="HomePage">
      <ProfileHead apiBasicInfo={apiBasicInfo} />
      <ProfileBody apiDevHistory={apiDevHistory} />
    </div>
  );
};
