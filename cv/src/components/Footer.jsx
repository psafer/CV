/**
 * @copyright 2025 Piotr Cierpiał
 * @license Apache-2.0
 */
/**
 * Components
 */
import { ButtonPrimary } from "./Button";
/**
 * Node Modules
 */
import { useTranslation } from "react-i18next";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/psafer",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/piotr-cierpiał/",
  },
];
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="section">
      <div className="container reveal-up">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch]">{t("LetsWork")}</h2>

            <ButtonPrimary
              href="mailto:piotr.cierpial@outlook.com"
              label={t("StartProject")}
              icon="chevron_right"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2">{t("Sitemap")}</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                    >
                      {t(label)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2">{t("Socials")}</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="" className="">
            <img src="/images/logo.png" width={40} height={40} alt="Logo" />
          </a>
          <p className="text-zinc-500 text-sm">
            &copy; 2025 <span className="text-zinc-200">Piotr Cierpiał</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
