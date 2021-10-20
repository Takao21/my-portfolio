import React from "react";
import "./ScrollTopButton.css";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ScrollTopButton = () => {
  return (
    <div className="ScrollTopButton">
      <div
        className="button"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
    </div>
  );
};
