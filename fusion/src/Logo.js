import "./index.css";
import React from "react";

const Logo = () => {
  return (
    <div className="container">
      <div className="logo-display" style={{ marginBottom: "50px" }}>
        <i className={`icon-left huge react icon`} />
        <p className="text">FUSION</p>
        <i className={`icon-right huge react icon`} />
      </div>
    </div>
  );
};

export default Logo;
