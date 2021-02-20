import "../stylesheets/index.css"
import React from "react"
const MissionStatement = () => {
  return (
    <div>
      <div
        className="mission-statement-display"
      >
        <p>WHERE ALBERTA'S TECH INDUSTRY</p>
        <p>CONVERGES TO RELEASE BOUNDLESS ENERGY</p>
      </div>
      <div className="banner">
      </div>
      <div className="platform-statement-display">
        <p>Fusion is a networking platform that provides a centralized</p>
        <p>database of events and lectures hosted by technology based</p>
        <p>organizations from Alberta</p>
      </div>
      <div className="event-list-display" style={{ marginBottom: "10px", marginLeft: "1em" }}>
        <p>
          Fuzes scheduled events or lectures posted by organizers for interested
          attendees
        </p>
        <p>
          Scroll down to view a list of Fuzes occuring this month:
        </p>
      </div>
    </div>
  )
}
export default MissionStatement
