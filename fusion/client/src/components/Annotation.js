import "../stylesheets/index.css";
import React from "react";
import FuzeList from "./FuzeList";

const Annotation = (props) => {
  return (
    <div className="containerAnnotation">
      <FuzeList fuzeFull={props.fuzeFull}
        setFuzeFull={props.setFuzeFull}
        filters={props.filters}></FuzeList>
      <div className="annotation-description">
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

export default Annotation;
