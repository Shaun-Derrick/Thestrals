import React from "react"
import { Dropdown } from "semantic-ui-react"
import {useState, useEffect} from 'react'
import "../stylesheets/Dropdown.css"
import "semantic-ui-css/semantic.min.css"

const DropdownExampleMultipleSelection = (props) => {
  // const Dropdown = (props) => { ----- Tried changing name an export but as it is a semantic-ui-react module I do not think it can be as it stops rendering
  const [options, setOptions] = useState([])

  useEffect(() => {
    const getTags = async () => {
      // fetch uses the "proxy" value set in client/package.json
      let response = await fetch("/Tags/")
      let tag = await response.json()
      setOptions(tag)
    }
    getTags()
  }, [])

  const createBlock = (e, data) => {
    let selectedCategory = data.value
    props.updateFilter(selectedCategory)
  }

  return (
    <Dropdown
      placeholder="Filter Categories"
      style={{
        color: "paleGreen",
        borderColor: "paleGreen",
        borderWidth: 4,
        width: "40vw",
        marginLeft: 10,
        marginTop: 10
      }}
      fluid
      multiple={true}
      selection
      options={options}
      onChange={createBlock}
    />
  )
}
// export default Dropdown tried changing name but then the dropdown module stops rendering
export default DropdownExampleMultipleSelection
