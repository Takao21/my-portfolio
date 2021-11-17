import React from "react";
import "./PortfolioPage.css";
import { BigQuote } from "../components/BigQuote";
import { SkillDiamonds } from "../components/SkillDiamonds";
import { projects } from "../_fake-api/api_projects";
import { ProjectList } from "../components/ProjectList";

export const PortfolioPage = () => {
  // fake api
  console.log("API Projects are ", projects);
  const apiProjects = projects;
  const htmlcssProjects =
    apiProjects &&
    apiProjects.filter(
      (prj) => prj.categories.includes("html") || prj.categories.includes("css")
    );

  return (
    <div className="PortfolioPage">
      <BigQuote />
      <SkillDiamonds />
      <ProjectList topic="HTML, CSS" projects={htmlcssProjects} />
    </div>
  );
};
