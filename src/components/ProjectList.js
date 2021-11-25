import {
  faArrowRight,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
import "./ProjectList.css";

export const ProjectList = ({ topic, projects }) => {
  const cardContainerRef = useRef();
  const scrollLeftRef = useRef();
  const scrollRightRef = useRef();
  let keepScrolling = () => {};

  useEffect(() => {
    console.log("useEff called");
    if (cardContainerRef.current.scrollLeft === 0) {
      scrollLeftRef.current.display = "none";
    } else if (
      cardContainerRef.current.scrollLeft === cardContainerRef.current.width
    ) {
      scrollRightRef.current.display = "none";
    } else {
      scrollLeftRef.current.display = "block";
      scrollRightRef.current.display = "block";
    }
  }, [cardContainerRef.current.scrollLeft]);

  const scrollCards = (e, dir) => {
    console.log(cardContainerRef.current.scrollLeft);
    // const cardContainer = [...e.target.parentElement.children].filter((child) =>
    //   [...child.classList].includes("prj-cards-container")
    // )[0];
    keepScrolling = setInterval(() => {
      // dir === "right"
      //   ? (cardContainer.scrollLeft += 10)
      //   : (cardContainer.scrollLeft -= 10);
      dir === "right"
        ? (cardContainerRef.current.scrollLeft += 10)
        : (cardContainerRef.current.scrollLeft -= 10);
    }, 10);
  };

  return (
    !!projects.length && (
      <div className="ProjectList">
        <div
          className="d-none d-md-block scroll-x-btn scroll-left"
          ref={scrollLeftRef}
          onMouseDown={(e) => scrollCards(e, "left")}
          onMouseUp={() => clearInterval(keepScrolling)}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
        <div
          className="d-none d-md-block scroll-x-btn scroll-right"
          ref={scrollRightRef}
          onMouseDown={(e) => scrollCards(e, "right")}
          onMouseUp={() => clearInterval(keepScrolling)}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
        <div className="category-title">
          <h3>{topic} Projects</h3>
        </div>
        <hr />
        <div className="prj-cards-container d-flex" ref={cardContainerRef}>
          {projects.map((prj) => (
            <div className="prj-card" key={prj.id}>
              <img
                className="prj-img"
                src={prj.imageURL}
                alt={prj.imageAlt}
              ></img>
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
