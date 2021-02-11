import React, { useState } from "react";
import {Link} from 'react-router-dom';

const AdminNav = () => {
  const [navLinkOpen, navLinkToggle] = useState(false);

  const handleNavLinksToggle = () => {
    navLinkToggle(!navLinkOpen);
  };
  const renderClasses = () => {
    let classes = "navlinks";
    if (navLinkOpen) {
      classes += " active"
    }
    return classes;
  };

  return (
    <nav>
      <div>
        <ul className={renderClasses()}>
          <li className="link">
            <Link to="/admin"> HOME</Link>
          </li>
          <li className="link">
            <Link to="/admin/create">CREATE</Link>
          </li>
          <li className="link">
            <Link to="/admin/update">UPDATE</Link>
          </li>
          <li className="link">
            <Link to="/admin/delete">DELETE</Link>
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
//We have used Link tags so that page 
//will not reload everytime we click a link attached to a route.
//Internally it converts Link into a tag