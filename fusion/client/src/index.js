import "./stylesheets/index.css"
import React from "react"
import ReactDOM from "react-dom"
import MissionStatement from "./components/MissionStatement"
import Logo from "./components/Logo"
import Annotation from "./components/Annotation"
import NavBar from "./components/NavBar"
import Dropdown from "./components/Dropdown"
import Filter from "./components/Filter"
import AdminModal from "./components/admin/AdminModal"
import { useState, useEffect } from "react"

const App = () => {
  const [currentFilters, setCurrentFilters] = useState([])
  const [fuzeFull, setFuzeFull] = useState([])

  useEffect(() => {
    const getSandbox = async () => {
      // fetch uses the "proxy" value set in client/package.json
      let response = await fetch("/Sandbox/")
      let fuze = await response.json()
      setFuzeFull(fuze)
    }
    getSandbox()
  }, [])

  return (
    <div className="LandingPage">
      <NavBar />
      <Logo />
       <MissionStatement />
      <Dropdown updateFilter={setCurrentFilters} />
      <Filter
        filters={currentFilters}
        fuzeFull={fuzeFull}
        setFuzeFull={setFuzeFull}
      />
      <Annotation fuzeFull={fuzeFull} setFuzeFull={setFuzeFull} />
      <AdminModal /> 
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
