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
    imgSrc: "/images/project-1.jpg",
    title: "Full stack music app",
    tags: ["API", "MVC", "Development"],
    projectLink: "https://musify-5al0.onrender.com/",
  },
  {
    imgSrc: "/images/project-2.jpg",
    title: "Free stock photo app",
    tags: ["API", "SPA"],
    projectLink: "https://pixstock-official.vercel.app/",
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
              title={title}
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
