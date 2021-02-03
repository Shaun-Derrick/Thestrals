import "./stylesheets/index.css"
import React from "react"
import ReactDOM from "react-dom"
import Text from "./components/Text"
import Logo from "./components/Logo"
import Annotation from "./components/Annotation"
import NavBar from "./components/NavBar"
import Dropdown from "./components/Dropdown"
import Filter from "./components/Filter"
import { useState } from "react"

const App = () => {
  const [currentFilters, setCurrentFilters] = useState([])
  const [sortedList, setSortedList] = useState([])

  return (
    <div className="LandingPage">
      <NavBar />
      <Logo />
      <Text />
      <Dropdown updateFilter={setCurrentFilters} />
      <Filter filters={currentFilters} updateList={setSortedList} />
      <Annotation list={sortedList} />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"))
