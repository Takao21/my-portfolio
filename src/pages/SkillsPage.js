import React from "react";
import { SkillCard } from "../components/SkillCard";
import "./SkillsPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faarro } from "@fortawesome/free-solid-svg-icons";
import { skills } from "../_fake-api/api_skills";

export const SkillsPage = () => {
  //fake api
  const apiSkills = skills;
  return (
    // <div className="SkillsPage">
    //   <div className="quote-div text-center">
    //     <blockquote className="my-quote">
    //       Don't get bothered by what you can't control. Focus on what you can
    //       do.
    //       <footer className="quote-footer">Takao</footer>
    //     </blockquote>
    //   </div>
    //   <div className="card-div row">
    //     {apiSkills.map((skill) => (
    //       <div key={skill.id} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
    //         <SkillCard skill={skill} />
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="SkillsPage">
      <div className="quote-div text-center">
        <blockquote className="my-quote">
          Don't get bothered by what you can't control. Focus on what you can
          do.
          <footer className="quote-footer">Takao</footer>
        </blockquote>
      </div>
      <div className="main-skills-div text-center">
        <div className="main-skill prl-1">
          <h2>HTML</h2>
        </div>
        <div className="main-skill prl-2">
          <h2>CSS</h2>
        </div>
        <div className="main-skill prl-3">
          <h2>JS</h2>
        </div>
        <div className="main-skill prl-4">
          <h2>React</h2>
        </div>
        <div className="main-skill prl-5">
          <h2>Bootstrap</h2>
        </div>
        <div className="main-skill prl-tail">
          <p>... and more.</p>
        </div>
      </div>

      <div className="projects-div">
        <div className="category-title">
          <h3>Personal Projects</h3>
        </div>
        <hr />
        <div className="prj-cards-container d-flex">
          <div className="prj-card">
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
          </div>
          <div className="prj-card">
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
          </div>
        </div>
      </div>
      <div className="projects-div">
        <div className="category-title">
          <h3>Collaboration Projects</h3>
        </div>
        <hr />
        <div className="prj-cards-container d-flex">
          <div className="prj-card">
            <img
              className="prj-img"
              src="https://dynamic.websimages.com/s/themes/refined/v1.25/screenshots/thumb-red.png"
              alt=""
            ></img>
            <div className="card-desc">
              <span className="see-details-btn">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
              <p className="card-title">Project Title</p>
              <p>
                A very fancy project made for a very interesting topic to share
                with very amazing people and do very crazy stuff.
              </p>
            </div>
          </div>
          <div className="prj-card">
            <img
              className="prj-img"
              src="https://dynamic.websimages.com/s/themes/classy/v1.28/screenshots/thumb-paisley.png"
              alt=""
            ></img>
            <div className="card-desc">
              <span className="see-details-btn">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
              <p className="card-title">A Pretty Long Project Title To Test</p>
              <p>
                A very fancy project made for a very interesting topic to share
                with very amazing people and do very crazy stuff.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
