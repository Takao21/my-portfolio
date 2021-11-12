import React from "react";
import "./ProfileBody.css";

export const ProfileBody = ({ apiDevHistory: devHistory }) => {
  return (
    <div className="ProfileBody">
      {devHistory.map((data) => (
        <div className="entry" key={data.entry}>
          <p className="entry-date">({data.date})</p>
          <p className="entry-story">{data.story}</p>
        </div>
      ))}
    </div>
  );
};
