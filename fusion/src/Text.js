import "./index.css";
import React from "react";
const Text = () => {
  return (
    <div>
      <p className="logo-display">
        <i className={`icon-left huge react icon`} />
        <p class="text">FUSION</p>
        <i className={`icon-right huge react icon`} />
      </p>
      <p class="mission-statement-display">WHERE ALBERTA'S TECH INDUSTRY </p>
      <p class="mission-statement-display">
        CONVERGES TO RELEASE BOUNDLESS ENERGY
      </p>
      <p class="platform-statement-display">
        Fusion is a networking platform that provides a centralized
      </p>
      <p class="platform-statement-display">
        database of events and lectures hosted by technology based
      </p>
      <p class="platform-statement-display">organizations from Alberta</p>
      <p class="event-list-display">
        Fuses scheduled events or lectures posted by organizers for interested
        attendees
      </p>
      <p class="event-list-display">
        Scroll down to view a list of Fuses occuring this week: 12/01/2021 ---
        18/01/2021
        {/* get date values dynamically as prop */}
      </p>
      <p class="footer-description">Become Part of the energy! </p>
      <p class="footer-description">
        Select contact us in the navigation bar to find out how to add your
        organizations{" "}
      </p>
      <p class="footer-description">event or lecture to the platform.</p>
    </div>
  );
};
export default Text;
