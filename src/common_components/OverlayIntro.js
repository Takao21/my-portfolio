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
      <div className="shadow-layer"></div>
      <div className="content-layer">
        <img
          src="http://cdn.wallpaperhi.com/1819x1024/20140528/code%20geass%20heterochromia%20lamperouge%20lelouch_www.wallpaperhi.com_1.jpg"
          alt="author"
          className="intro-image"
        />
        <div className="text-content">
          <h1>Looking for a quality web developer?</h1>
          <p>
            This is some awesome introduction. Not very long but not very short.
            Just pretty normal. Random stuff to lengthen the text.
          </p>
          <button
            className="btn btn-secondary"
            onClick={() => handleCloseOverlay()}
          >
            Find Out More
          </button>
        </div>
      </div>
    </div>
  );
};
