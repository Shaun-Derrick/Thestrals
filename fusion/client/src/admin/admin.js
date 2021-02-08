import "../stylesheets/admin.css"
import React from "react"
import ReactDOM from "react-dom"
import MissionStatement from "./components/adminOverlay"
import Logo from "./components/Logo"
import Annotation from "./components/Annotation"
import NavBar from "./components/NavBar"
import Dropdown from "./components/Dropdown"
import Filter from "./components/Filter"
import { useState, useEffect } from "react"

import AdminModal from "./components/AdminModal"


const App = () => {
  const [currentFilters, setCurrentFilters] = useState([])
  const [fuzeFull, setFuzeFull] = useState([])

  useEffect(() => {
    const getSandbox = async () => {
      // fetch uses the "proxy" value set in client/package.json
      let response = await fetch("/Sandbox/nextSevenDays")
      let fuze = await response.json()
      setFuzeFull(fuze)
    }
    getSandbox()
  }, [])

  return (
    <div className="adminPage">
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