import React, { useRef } from "react";
import "./OverlayIntro.css";

export const OverlayIntro = ({ setOverlayActive }) => {
  const overlayRef = useRef();
  const handleCloseOverlay = () => {
    setOverlayActive(false);
    // animation logic
    const overlayCss = overlayRef.current.style;
    let rect = overlayRef.current.getBoundingClientRect();
    let marginTop = rect.top;
    let accelerator = 10;
    let closeOverlayInterval = setInterval(() => {
      if (rect.bottom <= 0) {
        clearInterval(closeOverlayInterval);
        document.body.style.overflow = "auto"; // enable scroll when animation is done
      }
      marginTop -= 1 + accelerator;
      accelerator += 1; //  increase acceleration every interval
      overlayCss.marginTop = marginTop + "px";
      rect = overlayRef.current.getBoundingClientRect(); //  update rect value
    }, 15);
  };
  return (
    <div className="OverlayIntro" ref={overlayRef}>
      <button
        className="close-overlay-btn btn"
        onClick={() => handleCloseOverlay()}
      >
        Start
      </button>
    </div>
  );
};
