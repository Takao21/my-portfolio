import React from "react";
import { ProfileAbout } from "../components/ProfileAbout";
import { ProfileBio } from "../components/ProfileBio";
import { ProfileHead } from "../components/ProfileHead";
import { basicInfo } from "../_json-placeholder/api_getBasicInfo";
import { mediaUrls } from "../_json-placeholder/api_media";
import "./HomePage.css";

export const HomePage = () => {
  // placeholder API
  const apiBasicInfo = basicInfo;
  const apiMediaUrls = mediaUrls;
  return (
    <div className="HomePage">
      <ProfileHead apiBasicInfo={apiBasicInfo} apiMediaUrls={apiMediaUrls} />
      <ProfileAbout about={apiBasicInfo.about} />
      <ProfileBio apiMediaUrls={apiMediaUrls} />
    </div>
  );
};
