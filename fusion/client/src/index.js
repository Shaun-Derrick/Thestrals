import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import Text from "./Text";
import Logo from "./Logo";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Filter from "./Filter";

const App = () => {
  return (
    <div className="LandingPage">
      <NavBar />
      <Logo />
      <Text />
      <Filter />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
