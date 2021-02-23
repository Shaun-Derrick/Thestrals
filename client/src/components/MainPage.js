import "../stylesheets/index.css"
import React from "react"
import MissionStatement from "./MissionStatement"
import Logo from "./Logo"
import Annotation from "./Annotation"
import NavBar from "./NavBar"
import Dropdown from "./Dropdown"
import Filter from "./Filter"
import { useState, useEffect } from "react"
import { Button } from "semantic-ui-react"
import { Link } from "react-router-dom"

const MainPage = (props) => {
  const [currentFilters, setCurrentFilters] = useState([])
  const [fuzeFull, setFuzeFull] = useState([])

  useEffect(() => {
    const getFuzes = async () => {
      // fetch uses the "proxy" value set in client/package.json
      let response = await fetch("/Fuzes/month")
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
        category="tags"
        criteria='tag'
        route="/Fuzes/month"
      />
      <Annotation fuzeFull={fuzeFull} setFuzeFull={setFuzeFull} filters={currentFilters} />
      <Link to="/login">
        <Button style={{ opacity: 0, margin: 10 }}>Login</Button>
      </Link>
    </div>
  )
}

export default MainPage
