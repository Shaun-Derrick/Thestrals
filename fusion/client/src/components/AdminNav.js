import React, { useState } from "react";
import "../stylesheets/adminNav.css";
import {Link} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'

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
            <a href="#">ADMIN HOME</a>
          </li>
          <li className="link">
            <a href="#">CREATE</a>
          </li>
          <li className="link">
          <Link to="/update">UPDATE</Link>
          </li>
          <li className="link">
          <Link to="/delete">DELETE</Link>
          </li>
          <li className="link">
            <a href="#">LOGOUT</a>
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
