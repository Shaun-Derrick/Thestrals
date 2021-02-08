import React, { useState } from "react";
import "../stylesheets/adminNav.css";

const AdminNav = () => {
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
            <a href="#">Admin Home</a>
          </li>
          <li className="link">
            <a href="#">Create</a>
          </li>
          <li className="link">
            <a href="#">Update</a>
          </li>
          <li className="link">
            <a href="#">Delete</a>
          </li>
        </ul>
        <div onClick={handleNavLinksToggle} className="hamburger-toggle">
          <i className="bars icon"></i>
        </div>
      </div>
    </nav>
  );
};

export default AdminNav;
