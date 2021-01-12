import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import FuseList from "./FuseList";
import Text from "./Text";
const App = () => {
  return (
    <div class="LandingPage">
      <Text />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
