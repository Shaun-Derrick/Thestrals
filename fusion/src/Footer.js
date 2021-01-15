import "./index.css";
import React from "react";

const Footer = () => {
  return (
    <div className="containerFooter">
      <div className="event-list-display" style={{ marginBottom: "10px" }}>
        <p>
          Fuzes scheduled events or lectures posted by organizers for interested
          attendees
        </p>
        <p>
          Scroll down to view a list of Fuzes occuring this week: 12/01/2021 ---
          18/01/2021
          {/* get date values dynamically as prop */}
        </p>
      </div>
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
