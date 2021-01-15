import "./index.css";
import React from "react";
import FuseList from './FuseList'
const Footer = () => {
  return (
    <div className="containerFooter">
      <div className="event-list-display" style={{ marginBottom: "10px" }}>
        <p>
          Fuses scheduled events or lectures posted by organizers for interested
          attendees
        </p>
        <p>
          Scroll down to view a list of Fuses occuring this week: 
          {/* get date values dynamically as prop */}
        </p>
      </div>
      <FuseList></FuseList>
      <div className="footer-description">
        <p>Become Part of the energy! </p>
        <p>
          Select contact us in the navigation bar to find out how to add your
          organizations
        </p>
        <p>event or lecture to the platform.</p>
      </div>
    </div>
  );
};

export default Footer;
