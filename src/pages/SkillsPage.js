import React from "react";
import { SkillCard } from "../components/SkillCard";
import "./SkillsPage.css";
import { skills } from "../_fake-api/api_skills";

export const SkillsPage = () => {
  //fake api
  const apiSkills = skills;
  return (
    <div className="SkillsPage">
      <div className="row">
        {apiSkills.map((skill) => (
          <div key={skill.id} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <SkillCard skill={skill} />
          </div>
        ))}
      </div>
    </div>
  );
};
