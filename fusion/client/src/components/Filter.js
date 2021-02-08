import React from "react"
import "../stylesheets/Dropdown.css"
import "semantic-ui-css/semantic.min.css"
import { useState, useEffect } from "react"

const Filter = (props) => {
  const [filterFuzes, setFilterFuzes] = useState([])

  useEffect(() => {
    const getSandbox = async () => {
      // fetch uses the "proxy" value set in client/package.json
      let response = await fetch("/Sandbox")
      let allFuzes = await response.json()
      setFilterFuzes(allFuzes)
    }
    getSandbox()
  }, [])

  useEffect(() => {
    filterItems(props.filters)
  }, [props.filters])

  const filterItems = (list) => {
    let fuzes = filterFuzes.filter((fuzes) => {
      let contains = list.includes(fuzes.tags)
      return contains
    })
    if (list.length === 0) {
      const getSandbox = async () => {
        // fetch uses the "proxy" value set in client/package.json
        let response = await fetch("/Sandbox/")
        let fuze = await response.json()
        props.setFuzeFull(fuze)
      }
      getSandbox()
    }else if(fuzes.length===0){
      props.setFuzeFull([{Title:'No Fuzes found! Try a different tag.', startDate: ' ', endDate: ' '}])
    }
    else {
      props.setFuzeFull(fuzes)
    }
  }

  return <div></div>
}
export default Filter
