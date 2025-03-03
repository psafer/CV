/**
 * @copyright 2025 Piotr Cierpiał
 * @license Apache-2.0
 */
/**
 *Node Modules
 */
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:text-xl md:pr-10 md:pl-10 text-justify">
            {t("Aboutme")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
