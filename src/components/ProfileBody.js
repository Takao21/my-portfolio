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
      <div className="meme-section">
        <img
          className="honestwork-meme"
          src={
            process.env.REACT_APP_PUBLIC_URL + "/pictures/honestworkmeme.jpg"
          }
          alt=""
        ></img>
      </div>
    </div>
  );
};
