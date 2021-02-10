import "../stylesheets/index.css"
import React from "react"
import MissionStatement from "./MissionStatement"
import Logo from "./Logo"
import Annotation from "./Annotation"
import NavBar from "./NavBar"
import Dropdown from "./Dropdown"
import Filter from "./Filter"
import AdminModal from "./admin/AdminModal"
import { useState, useEffect } from "react"

const MainPage = (props) => {
  const [currentFilters, setCurrentFilters] = useState([])
  const [fuzeFull, setFuzeFull] = useState([])

  useEffect(() => {
    const getFuzes = async () => {
      // fetch uses the "proxy" value set in client/package.json
      let response = await fetch("/Fuzes/")
      let fuze = await response.json()
      setFuzeFull(fuze)
    }
    getFuzes()
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

export default MainPage
