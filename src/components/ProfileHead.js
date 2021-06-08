import React from "react";
import "./ProfileHead.css";

export const ProfileHead = () => {
  return (
    <div className="ProfileHead row justify-content-around">
      <div className="image-container col-2">
        <img
          className="profile-image"
          src="https://i.pinimg.com/originals/bd/2e/23/bd2e2373e77d43f6b48d6fceafd96a2b.jpg"
          alt="profile"
        ></img>
      </div>
      <div className="headline-container col-8 text-left">
        <h3>Welcome to my world!</h3>
        <hr></hr>
        <h5>Name : Aung Kaung Khant</h5>
        <h5>Date of Birth : 21 January, 2001</h5>
        <h5>Gender : Male</h5>
        <h5>Occupation : Web Developer</h5>
      </div>
    </div>
  );
};
