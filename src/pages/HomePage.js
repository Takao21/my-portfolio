import React from "react";
import { ProfileBody } from "../components/ProfileBody";
import { ProfileHead } from "../components/ProfileHead";
import { devHistory } from "../_fake-api/api_devHistory";
import { basicInfo } from "../_fake-api/api_getBasicInfo";
import { mediaUrls } from "../_fake-api/api_media";
import "./HomePage.css";

export const HomePage = () => {
  // placeholder API
  const apiBasicInfo = basicInfo;
  const apiMediaUrls = mediaUrls;
  const apiDevHistory = devHistory;
  return (
    <div className="HomePage">
      <ProfileHead apiBasicInfo={apiBasicInfo} apiMediaUrls={apiMediaUrls} />
      <ProfileBody apiDevHistory={apiDevHistory} />
    </div>
  );
};
