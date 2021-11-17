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
  const jsProjects =
    apiProjects &&
    apiProjects.filter(
      (prj) =>
        prj.categories.includes("js") || prj.categories.includes("javascript")
    );
  const bootstrapProjects =
    apiProjects &&
    apiProjects.filter((prj) => prj.categories.includes("bootstrap"));
  const reactProjects =
    apiProjects &&
    apiProjects.filter(
      (prj) =>
        prj.categories.includes("react") || prj.categories.includes("redux")
    );
  const ngProjects =
    apiProjects &&
    apiProjects.filter((prj) => prj.categories.includes("angular"));

  return (
    <div className="PortfolioPage">
      <BigQuote />
      <SkillDiamonds />
      <ProjectList topic="HTML, CSS" projects={htmlcssProjects} />
      <ProjectList topic="JavaScript" projects={jsProjects} />
      <ProjectList topic="Bootstrap" projects={bootstrapProjects} />
      <ProjectList topic="React/Redux" projects={reactProjects} />
      <ProjectList topic="Angular" projects={ngProjects} />
    </div>
  );
};
