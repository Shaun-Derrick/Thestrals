import "../stylesheets/Dropdown.css"
import "semantic-ui-css/semantic.min.css"
import { useState, useEffect } from "react"

const Filter = (props) => {
  const [filterFuzes, setFilterFuzes] = useState([])

  let category=props.category
  
  useEffect(() => {
    const getFuzes = async () => {
      // fetch uses the "proxy" value set in client/package.json
      let response = await fetch(props.route)
      let allFuzes = await response.json()
      setFilterFuzes(allFuzes)
    }
    getFuzes()
  }, [])

  useEffect(() => {
    filterItems(props.filters)
  }, [props.filters])

  const filterItems = (list) => {
    let fuzes = filterFuzes.filter((fuzes) => {
      let contains = list.includes(fuzes[category])
      return contains
    })
    if (list.length === 0 || category===" ") {
      const getFuzes = async () => {
        // fetch uses the "proxy" value set in client/package.json
        let response = await fetch(props.route)
        let fuze = await response.json()
        props.setFuzeFull(fuze)
      }
      getFuzes()
    }else if(fuzes.length===0){
      props.setFuzeFull([{Title:`No Fuzes found! Try a different ${props.criteria}.`, startDate: ' ', endDate: ' '}])
    }
    else {
      props.setFuzeFull(fuzes)
    }
  }
  return null
}
export default Filter
