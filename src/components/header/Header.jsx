import React from "react";
import "../header/Header.css";

const menuItems = [
  {
    key: "home",
    title: "Home",
    link: "scroll-section-0",
  },
  {
    key: "about",
    title: "About",
    link: "scroll-section-1",
  },
  {
    key: "strenth",
    title: "Strength",
    link: "scroll-section-2",
  },
  {
    key: "projects",
    title: "Projects",
    link: "scroll-section-3",
  },
];

const Header = () => {
  return (
    <div className="global-nav">
      <div className="global-nav-links">
        {menuItems.map((item) => (
          <a key={item.key} href={`#${item.link}`} className="global-nav-item">
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
