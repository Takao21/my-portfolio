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
    <div className="ProfileHead container-fluid">
      <div className="common-container row justify-content-around">
        <div className="image-container col-2">
          {/* Image Side */}
          <img
            className="profile-image"
            src="https://i.pinimg.com/originals/bd/2e/23/bd2e2373e77d43f6b48d6fceafd96a2b.jpg"
            alt="profile"
          ></img>
        </div>
        <div className="headline-container col-8 text-left">
          {/* Text Side */}
          <h2 className="welcome-header">{data.name}</h2>
          <hr></hr>
          <h5>
            <span className="info-type">Aliases</span> :{" "}
            {data.aliases.map((alias, index, arr) => (
              <span>{index === arr.length - 1 ? alias : alias + ", "} </span>
            ))}
          </h5>
          <h5>
            <span className="info-type">Date of Birth</span> : {data.birthday}
          </h5>
          <h5>
            <span className="info-type">Gender</span> : {data.gender}
          </h5>
          <h5>
            <span className="info-type">Occupation</span> : {data.occupation}
          </h5>
        </div>
      </div>
    </div>
  );
};
