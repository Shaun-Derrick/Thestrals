import React from "react"
import "../stylesheets/Dropdown.css"
import "semantic-ui-css/semantic.min.css"
import { useState, useEffect } from "react"

const Filter = (props) => {
  const [filterFuzes, setFilterFuzes] = useState([])
  const [searchedList, setSearchedList] = useState([])

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

  // const filterItems = (list) => {
  //   let events = filterFuzes.filter((event) => {
  //     let contains = list.includes(event.tags1)
  //     console.log(list, event.tags1, contains)
  //     return contains
  //   })
  //   setSearchedList(events)
  //   props.updateList(searchedList)
  // }
  const filterItems = (list) => {
    let fuzes = filterFuzes.filter((fuzes) => {
      let contains = list.includes(fuzes.tags1)
      // console.log(list, fuzes.tags1, contains)
      return contains
    })
    setSearchedList(fuzes)
    props.updateList(searchedList)
  }
  // const drawEvents = () => {
  //   let results = searchedList.map((fuze) => {
  //     let mappedItem = (
  //       <div>
  //         <div className="content">Category: {fuze.tags1}</div>
  //         <div className="content">Organization: {fuze.organizer}</div>
  //         <div className="content">Fuze: {fuze.title}</div>
  //         <div className="content">Date: {fuze.startDate}</div>
  //         <div className="content">Starts: {fuze.startTime}</div>
  //         <div className="content">Ends: {fuze.endTime}</div>
  //       </div>
  //     )
  //     return mappedItem
  //   })
  //   return results
  // }
  return (
    <div>
      <div>
        {/* {drawEvents()} */}
        {/* <div>{console.log(searchedList)}</div> */}
      </div>
    </div>
  )
}
export default Filter
