import "./PortfolioPage.css";
import { BigQuote } from "../components/BigQuote";
import { SkillDiamonds } from "../components/SkillDiamonds";
import { projects } from "../_fake-api/api_projects";
import { ProjectList } from "../components/ProjectList";

export const PortfolioPage = () => {
  // fake api
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
      <ProjectList topic="React/Redux" projects={reactProjects} />
      <ProjectList topic="JavaScript" projects={jsProjects} />
      <ProjectList topic="Angular" projects={ngProjects} />
      <ProjectList topic="Bootstrap" projects={bootstrapProjects} />
      <ProjectList topic="HTML, CSS" projects={htmlcssProjects} />
    </div>
  );
};
