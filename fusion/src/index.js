import React from "react";
import ReactDOM from "react-dom";
import FuseList from './FuseList'

function App() {
    return (
      <div className="App">
       <FuseList></FuseList>
      </div>
    );
  }

ReactDOM.render(<App />, document.querySelector("#root"));
