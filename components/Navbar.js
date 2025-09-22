import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "../hooks/useLanguage";
import { siteConfig } from "../config/site";

const Navbar = ({ specialClass = "" }) => {
  const { currentLanguage, switchLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const getNavLink = (key) => siteConfig.urls[currentLanguage][key];

  return (
    <nav className={`navbar ${specialClass}`}>
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          {/* <img src="/images/logo.png" alt="Abarhail" className="logo" /> */}
        </Link>

        <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
          {/* <li><Link href={getNavLink("home")}>{t("navigation.home")}</Link></li> */}
          <li><Link href={getNavLink("about")}>{t("navigation.about")}</Link></li>
          <li><Link href={getNavLink("quality")}>{t("navigation.quality")}</Link></li>
          <li><Link href={getNavLink("products")}>{t("navigation.products")}</Link></li>
          <li><Link href={getNavLink("socialResponsibility")}>{t("navigation.socialResponsibility")}</Link></li>
          <li><Link href={getNavLink("news")}>{t("navigation.news")}</Link></li>
        </ul>

        <li className="lang-change">
          <button className="language-switch" onClick={switchLanguage}>
            {t("common.switchLanguage")}
          </button>
        </li>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
