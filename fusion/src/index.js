import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import Text from "./Text";
import Logo from "./Logo";
import Footer from "./Footer";
const App = () => {
  return (
    <div className="LandingPage">
      <Logo />,
      <Text />,
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
