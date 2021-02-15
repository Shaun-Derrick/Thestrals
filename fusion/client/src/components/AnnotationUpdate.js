import "../stylesheets/index.css";
import React from "react";
import FuzeList from "./FuzeList";

const AnnotationUpdate = (props) => {
  return (
    <div className="containerAnnotation">
      <div className="event-list-display-update" style={{ marginBottom: "10px" }}>
        <p>
          {/* Fuzes scheduled events or lectures posted by organizers for interested
          attendees */}
        </p>
        <p>
          Scroll down to view a list of Fuzes occuring this week:
        </p>
      </div>
      <FuzeList fuzeFull={props.fuzeFull}
        setFuzeFull={props.setFuzeFull}></FuzeList>
      <div className="annotation-description">
        
      </div>
    </div>
  );
};

export default AnnotationUpdate;
