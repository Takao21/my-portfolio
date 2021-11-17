import React from "react";
import { ProfileBody } from "../components/ProfileBody";
import { ProfileHead } from "../components/ProfileHead";
import { devHistory } from "../_fake-api/api_devHistory";
import { basicInfo } from "../_fake-api/api_getBasicInfo";
import "./BackgroundPage.css";

export const BackgroundPage = () => {
  // placeholder API
  const apiBasicInfo = basicInfo;
  const apiDevHistory = devHistory;
  return (
    <div className="BackgroundPage">
      <ProfileHead apiBasicInfo={apiBasicInfo} />
      <ProfileBody apiDevHistory={apiDevHistory} />
    </div>
  );
};
