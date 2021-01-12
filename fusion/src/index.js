import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
// import Logo from "./Logo";
// import MissionStatement from "./MissionStatement";
// import PlatformDescription from "./PlatformDescription";
// import FooterDescription from "./FooterDescription";
// import EventList from "./EventList";
import Text from "./Text";
const App = () => {
  return (
    <div class="LandingPage">
      <Text />
      {/* <Logo />
      <MissionStatement />
      <PlatformDescription />
      <EventList />
      <FooterDescription /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
