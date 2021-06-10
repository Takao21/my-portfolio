import React from "react";
import { ProfileAbout } from "../components/ProfileAbout";
import { ProfileBio } from "../components/ProfileBio";
import { ProfileHead } from "../components/ProfileHead";
import { basicInfo } from "../_json-placeholder/api_getBasicInfo";
import "./HomePage.css";

export const HomePage = () => {
  // placeholder API
  const apiBasicInfo = basicInfo;
  return (
    <div className="HomePage">
      <ProfileHead apiBasicInfo={apiBasicInfo} />
      <ProfileAbout about={apiBasicInfo.about} />
      <ProfileBio />
    </div>
  );
};
