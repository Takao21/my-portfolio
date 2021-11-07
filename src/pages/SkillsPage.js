import React from "react";
import { SkillCard } from "../components/SkillCard";
import "./SkillsPage.css";
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
      </div>
      <div className="projects-div">
        <div className="category-title">
          <h3>HTML Projects</h3>
        </div>
        <div className="prj-cards-container d-flex">
          <div className="prj-card">
            <img
              className="prj-img"
              src="https://lastresortwebdesign.com/wp-content/uploads/2018/01/sample-milos.jpg"
              alt=""
            ></img>
          </div>
          <div className="prj-card">
            <img
              className="prj-img"
              src="https://www.onressoftware.com/wp-content/uploads/2019/10/Screen-Shot-2019-10-15-at-TuesdayOctober1510.00PM.png"
              alt=""
            ></img>
          </div>
        </div>
      </div>
      <div className="projects-div">
        <div className="category-title">
          <h3>CSS Projects</h3>
        </div>
        <div className="prj-cards-container d-flex">
          <div className="prj-card">
            <img
              className="prj-img"
              src="https://dynamic.websimages.com/s/themes/refined/v1.25/screenshots/thumb-red.png"
              alt=""
            ></img>
          </div>
          <div className="prj-card">
            <img
              className="prj-img"
              src="https://dynamic.websimages.com/s/themes/classy/v1.28/screenshots/thumb-paisley.png"
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};
