import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const pathname = useRouter().pathname;
  const links = [
    {
      name: "HOME",
      url: "/",
    },
    {
      name: "WORK",
      url: "/work",
    },
    {
      name: "CONTACT",
      url: "/contact",
    },
  ];
  const [menuState, setMenuState] = useState(false);

  // HANDLERS
  const showMenuHandler = () => {
    setMenuState(!menuState);
  };
  return (
    <header className="header__container">
      {/* DESKTOP NAVIGATION */}
      <div className="header__desktop">
        <div className="header__links_container">
          <div className="header__links">
            {links.map((link) => (
              <Link key={link.name} href={link.url}>
                <a
                  className={
                    (link.url != "/" && pathname.includes(link.url)) ||
                    (link.url === "/" && pathname === link.url)
                      ? `header__link ${"header__link_active"}`
                      : "header__link"
                  }
                >
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* MOBILE NAVIGATION */}
      <div className="header__mobile">
        <button
          className="header__menu_toggle"
          onClick={showMenuHandler}
          aria-label="show menu"
        >
          {/* <FontAwesomeIcon className="header__user_icon" icon={faBars} /> */}
          <h4>MENU</h4>
        </button>
        <div className={`mobile__menu ${menuState ? "active-menu" : ""}`}>
          <div className="header__links">
            {links.map((link) => (
              <Link key={link.name} href={link.url}>
                <a
                  className={
                    pathname === link.url
                      ? `header__link ${"header__link_active"}`
                      : "header__link"
                  }
                  onClick={showMenuHandler}
                >
                  {link.name}
                </a>
              </Link>
            ))}
            <button
              className="mobile_menu_close_button"
              onClick={showMenuHandler}
              aria-label="show menu"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navigation;
