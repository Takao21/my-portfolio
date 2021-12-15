import React from "react";
import "./SkillDiamonds.css";

export const SkillDiamonds = () => {
  return (
    <div className="SkillDiamonds text-center">
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
  );
};
