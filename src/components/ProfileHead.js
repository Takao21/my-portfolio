import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ProfileHead.css";
import "../reducers";
import { updateData } from "../actions";

export const ProfileHead = ({ apiBasicInfo }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.updateDataReducer);
  useEffect(() => {
    dispatch(updateData(apiBasicInfo));
  }, []);
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
        <h5>Name : {data.name}</h5>
        <h5>Date of Birth : {data.birthday}</h5>
        <h5>Gender : {data.gender}</h5>
        <h5>Occupation : {data.occupation}</h5>
      </div>
    </div>
  );
};
