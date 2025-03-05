/**
 * @copyright 2025 Piotr Cierpiał
 * @license Apache-2.0
 */
/**
 * Node Modules
 */
import { useTranslation } from "react-i18next";
/**
 * Components
 */
import SkillCard from "./SkillCard";
const skillItem = [
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "UI",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "WebServer",
  },
  {
    imgSrc: "/images/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "/images/firebase.svg",
    label: "Firebase",
    desc: "Backend",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "UI",
  },
  {
    imgSrc: "/images/cs.svg",
    label: "C#",
    desc: "AD",
  },
  {
    imgSrc: "/images/dotnet.svg",
    label: ".NET",
    desc: "Framework",
  },
  {
    imgSrc: "/images/cpp.svg",
    label: "C++",
    desc: "SP",
  },
];

const Skill = () => {
  const { t } = useTranslation();
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="headline-2 reveal-up">{t("Tools")}</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          {t("ToolsDesc")}
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={t(desc)}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
