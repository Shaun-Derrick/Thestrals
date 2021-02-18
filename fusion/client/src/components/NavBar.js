import React, { useState } from "react";
import {Link} from 'react-router-dom';
import "../stylesheets/NavBar.css";

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
      <div className='homeNavBar'>
        <ul className={renderClasses()}>
          <li className="link">
            <Link to="/">Home</Link>
          </li>
          <li className="link">
            <Link to="/fuzes">Fuzes</Link>
          </li>
          <li className="link">
            <Link to="/about">About</Link>
          </li>
          <li className="link">
            <Link to="/services">Services</Link>
          </li>
          <li className="link">
            <Link to="/contact">Contact Us</Link>
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
