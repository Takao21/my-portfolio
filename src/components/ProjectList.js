import {
  faArrowRight,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
import "./ProjectList.css";

export const ProjectList = ({ topic, recommended, projects }) => {
  const cardContainerRef = useRef();
  const scrollLeftRef = useRef();
  const scrollRightRef = useRef();
  let keepScrolling = () => {};

  useEffect(() => {
    setupScrollButtons();
  });

  const setupScrollButtons = () => {
    if (cardContainerRef) {
      const container = cardContainerRef.current;
      const scrollLeftBtn = scrollLeftRef.current;
      const scrollRightBtn = scrollRightRef.current;
      const containerWidth = container.clientWidth;
      const itemsWidth =
        container.children[0].clientWidth * container.children.length; //  get the true width of all cards combined
      itemsWidth < containerWidth //  no need scroll buttons when container is larger than all items combined
        ? (scrollLeftBtn.style.opacity = "0")
        : (scrollLeftBtn.style.opacity = "1");
      itemsWidth < containerWidth
        ? (scrollRightBtn.style.opacity = "0")
        : (scrollRightBtn.style.opacity = "1");
    }
  };

  const scrollCards = (dir) => {
    keepScrolling = setInterval(() => {
      const cardContainer = cardContainerRef.current;
      dir === "right"
        ? (cardContainer.scrollLeft += 10)
        : (cardContainer.scrollLeft -= 10);
    }, 10);
  };

  return (
    !!projects.length && (
      <div className="ProjectList">
        <div
          className="d-none d-md-block scroll-x-btn scroll-left"
          ref={scrollLeftRef}
          onMouseDown={() => scrollCards("left")}
          onMouseUp={() => clearInterval(keepScrolling)}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
        <div
          className="d-none d-md-block scroll-x-btn scroll-right"
          ref={scrollRightRef}
          onMouseDown={() => scrollCards("right")}
          onMouseUp={() => clearInterval(keepScrolling)}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
        <div className="category-title">
          {recommended && (
            <span className="recommend-label">Most Impressive</span>
          )}
          <h3>{topic} Projects</h3>
        </div>
        <hr />
        <div className="prj-cards-container d-flex" ref={cardContainerRef}>
          {projects.map((prj) => (
            <div className="prj-card" key={prj.id}>
              <img className="prj-img" src={prj.imageURL} alt={prj.imageAlt} />
              <div className="card-desc">
                <a href={prj.sourceURL} target="_blank" rel="noreferrer">
                  <span className="see-details-btn">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </a>
                <p className="card-title">{prj.title}</p>
                <p>{prj.shortDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
};
