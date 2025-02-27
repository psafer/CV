/**
 * @copyright 2025 Piotr Cierpiał
 * @license Apache-2.0
 */
/**
 * Node Modules
 */
import { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import i18n from "../i18n";

const Navbar = ({ navOpen }) => {
  const { t } = useTranslation();
  const lastActiveLink = useRef();
  const activeBox = useRef();

  const initActiveBox = () => {
    if (!lastActiveLink.current || !activeBox.current) return;
    activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
  };

  useEffect(() => {
    lastActiveLink.current = document.querySelector(".nav-link.active");
    initActiveBox();

    const handleResize = () => initActiveBox();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleLanguageChange = () => {
      setTimeout(initActiveBox, 10);
    };

    i18n.on("languageChanged", handleLanguageChange);
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove("active");
    event.target.classList.add("active");
    lastActiveLink.current = event.target;
    initActiveBox();
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "pl" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  const navItems = [
    { label: t("Home"), link: "#home", className: "nav-link active" },
    { label: t("About"), link: "#about", className: "nav-link" },
    { label: t("Projects"), link: "#projects", className: "nav-link" },
    { label: t("Skills"), link: "#skills", className: "nav-link" },
    {
      label: t("Contact"),
      link: "#contact",
      className: "nav-link nav-link-contact",
    },
    {
      label: t("switch_language"),
      action: toggleLanguage,
      className: "nav-link cursor-pointer flex items-center gap-1",
    },
  ];

  return (
    <nav className={"navbar " + (navOpen ? "active" : "")}>
      {navItems.map(({ label, link, action, className }, key) =>
        link ? (
          <a
            href={link}
            key={key}
            className={className}
            onClick={activeCurrentLink}
          >
            {label}
          </a>
        ) : (
          <button
            key={key}
            className={`${className} flex items-center gap-1`}
            onClick={action}
          >
            <span className="material-symbols-rounded">
              {(navOpen = "language")}
            </span>
            {label}
          </button>
        )
      )}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
