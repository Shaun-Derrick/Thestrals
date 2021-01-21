import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [navLinkOpen, navLinkToggle] = useState(false);

  const handleNavLinksToggle = () => {
    navLinkToggle(!navLinkOpen);
  };
  const renderClasses = () => {
    let classes = "navlinks";
    if (navLinkOpen) {
      classes += " active";
    }
    return classes;
  };

  return (
    <nav>
      <div>
        <ul className={renderClasses()}>
          <li className="link">
            <a href="#">Home</a>
          </li>
          <li className="link">
            <a href="#">About Us</a>
          </li>
          <li className="link">
            <a href="#">Services</a>
          </li>
          <li className="link">
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <div onClick={handleNavLinksToggle} className="hamburger-toggle">
          <i className="bars icon"></i>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
