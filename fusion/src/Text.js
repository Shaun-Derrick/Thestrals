import "./index.css";
import React from "react";
const Text = () => {
  return (
    <div>
      <div className="logo-display" style={{ marginBottom: "50px" }}>
        <i className={`icon-left huge react icon`} />
        <p className="text">FUSION</p>
        <i className={`icon-right huge react icon`} />
      </div>
      <div
        className="mission-statement-display"
        style={{ marginBottom: "100px" }}
      >
        <p>WHERE ALBERTA'S TECH INDUSTRY</p>
        <p>CONVERGES TO RELEASE BOUNDLESS ENERGY</p>
      </div>
      <div
        className="platform-statement-display"
        style={{ marginBottom: "50px" }}
      >
        <p>Fusion is a networking platform that provides a centralized</p>
        <p>database of events and lectures hosted by technology based</p>
        <p>organizations from Alberta</p>
      </div>
      <div className="event-list-display" style={{ marginBottom: "100px" }}>
        <p>
          Fuses scheduled events or lectures posted by organizers for interested
          attendees
        </p>
        <p>
          Scroll down to view a list of Fuses occuring this week: 12/01/2021 ---
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
export default Text;
