import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ProjectList.css";

export const ProjectList = ({ topic, projects }) => {
  return (
    !!projects.length && (
      <div className="ProjectList">
        <div className="category-title">
          <h3>{topic} Projects</h3>
          {console.log(topic, "projects are", projects)}
        </div>
        <hr />
        <div className="prj-cards-container d-flex">
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
