/**
 * @copyright 2025 Piotr Cierpiał
 * @license Apache-2.0
 */
import { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import i18n from "../i18n";

const Navbar = ({ navOpen }) => {
  const { t } = useTranslation();
  const activeBox = useRef();
  const [activeSection, setActiveSection] = useState("home");

  const initActiveBox = () => {
    const activeLink = document.querySelector(".nav-link.active");
    if (!activeLink || !activeBox.current) return;

    activeBox.current.style.top = activeLink.offsetTop + "px";
    activeBox.current.style.left = activeLink.offsetLeft + "px";
    activeBox.current.style.width = activeLink.offsetWidth + "px";
    activeBox.current.style.height = activeLink.offsetHeight + "px";
  };

  useEffect(() => {
    initActiveBox();
    window.addEventListener("resize", initActiveBox);
    return () => {
      window.removeEventListener("resize", initActiveBox);
    };
  }, [activeSection]);

  useEffect(() => {
    const handleLanguageChange = () => {
      setTimeout(initActiveBox, 10);
    };

    i18n.on("languageChanged", handleLanguageChange);
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const activeCurrentLink = (event, sectionId) => {
    event.preventDefault();
    setActiveSection(sectionId);
    document.querySelector(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "pl" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  const navItems = [
    { label: t("Home"), link: "#home", id: "home" },
    { label: t("About"), link: "#about", id: "about" },
    { label: t("Skills"), link: "#skills", id: "skills" },
    { label: t("Projects"), link: "#projects", id: "projects" },
    {
      label: t("switch_language"),
      action: toggleLanguage,
      className: "nav-link cursor-pointer flex items-center gap-1",
    },
  ];

  return (
    <nav className={"navbar " + (navOpen ? "active" : "")}>
      {navItems.map(({ label, link, action, id }, key) =>
        link ? (
          <a
            href={link}
            key={key}
            className={`nav-link ${activeSection === id ? "active" : ""}`}
            onClick={(e) => activeCurrentLink(e, link)}
          >
            {label}
          </a>
        ) : (
          <button
            key={key}
            className="nav-link flex items-center gap-1 cursor-pointer"
            onClick={action}
          >
            <span className="material-symbols-rounded">language</span>
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
