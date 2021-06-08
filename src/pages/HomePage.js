import React from "react";
import { ProfileHead } from "../components/ProfileHead";
import { basicInfo } from "../_json-placeholder/api_getBasicInfo";
import "./HomePage.css";

export const HomePage = () => {
  // placeholder API
  const apiBasicInfo = basicInfo;
  return (
    <div className="HomePage">
      <ProfileHead apiBasicInfo={apiBasicInfo}></ProfileHead>
    </div>
  );
};
