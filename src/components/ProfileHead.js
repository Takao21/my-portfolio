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
    // eslint-disable-next-line
  }, []);
  return (
    <div className="ProfileHead">
      <div className="hero-text">
        <p>
          This is the story of a developer named{" "}
          <span className="highlighted-text">Aung Kaung Khant</span> also known
          as <span className="highlighted-text">Takao</span>.
        </p>
      </div>
      <div className="hero-img"></div>
    </div>
  );
};
