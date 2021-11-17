import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ProjectList.css";

export const ProjectList = ({ topic, projects }) => {
  return (
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
        {/* <div className="prj-card">
          <img
            className="prj-img"
            src="https://lastresortwebdesign.com/wp-content/uploads/2018/01/sample-milos.jpg"
            alt=""
          ></img>
          <div className="card-desc">
            <span className="see-details-btn">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
            <p className="card-title">Smol Title</p>
            <p>
              A very fancy project made for a very interesting topic to share
              with very amazing people and do very crazy stuff.
            </p>
          </div>
        </div> */}
        {/* <div className="prj-card">
          <img
            className="prj-img"
            src="https://34sp.net/img/www/sample-sites/pingcreates.1.jpg"
            alt=""
          ></img>
          <div className="card-desc">
            <span className="see-details-btn">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
            <p className="card-title">Project Title</p>
            <p>
              A very fancy project made for a very interesting topic to share
              with very amazing people and do very crazy stuff. Let me extend
              this one a bit more than other cards' descriptions so that I can
              test unique cases of exceptionally lengthy texts on card.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};
