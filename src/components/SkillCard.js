import React from "react";
import "./SkillCard.css";

export const SkillCard = ({ skill }) => {
  return (
    <div className="SkillCard card h-100">
      <img className="card-img-top" src={skill.imageUrl} alt="skill name" />
      <div className="card-body">
        <h5 className="card-title">{skill.skillName}</h5>
        <p className="card-text">{skill.skillDetail}</p>
      </div>
    </div>
  );
};
