import "../stylesheets/index.css"
import React from "react"
import FuzeList from "./FuzeList"

const Footer = (props) => {
  return (
    <div className="containerAnnotation">
      <div className="event-list-display" style={{ marginBottom: "10px" }}>
        <p>
          Fuzes scheduled events or lectures posted by organizers for interested
          attendees
        </p>
        <p>
          Scroll down to view a list of Fuzes occuring this week:
          {/* get date values dynamically as prop */}
        </p>
      </div>
      <FuzeList list={props.list}></FuzeList>
      <div className="annotation-description">
        <p>Become Part of the energy! </p>
        <p>
          Select contact us in the navigation bar to find out how to add your
          organizations
        </p>
        <p>event or lecture to the platform.</p>
      </div>
    </div>
  )
}

export default Footer