/**
 * @copyright 2025 Piotr Cierpiał
 * @license Apache-2.0
 */
/**
 * Components
 */
import ProjectCard from "./ProjectCard";
/**
 * Node Modules
 */
import { useTranslation } from "react-i18next";
const works = [
  {
    imgSrc: "/images/project-1.png",
    title: "Social",
    tags: ["SPA", "Firebase", "Fullstack"],
    projectLink: "https://neet-f16e6.web.app",
  },
  {
    imgSrc: "/images/project-2.png",
    title: "Library",
    tags: ["Go", "MVC", "Student Project", "Web App"],
    projectLink: "https://github.com/FifiTV/Library-Project",
  },
  {
    imgSrc: "/images/comingsoon.png",
    title: "Coming Soon . . .",
    tags: ["Coming", "Soon"],
    projectLink: "https://github.com/psafer",
  },
];
const Projects = () => {
  const { t } = useTranslation();
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">{t("PortfolioTitle")}</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(360px,_1fr))] reveal-up">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={t(title)}
              tags={tags}
              projectLink={projectLink}
              classes={"reveal-up"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
