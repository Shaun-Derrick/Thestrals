import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import { Container, Segment, Header, Button } from "semantic-ui-react"
import { parseISO, add, format } from "date-fns"

const ViewFuze = () => {
  //destrcturing of id by hook useParams
  const { _id } = useParams()
  const [fuze, setFuze] = useState({
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    Title: "",
    description: "",
    venue: "",
    tags: "",
    organizer: "",
    whereIFoundThisEvent2: "",
  })

  useEffect(() => {
    const loadFuze = async () => {
      const result = await axios.get(`/Fuzes/${_id}`)
      setFuze(result.data)
    }
    loadFuze()
  }, [])

  function convertDate(date) {
    if (date === null || date === undefined || date === "") {
      return undefined
    }
    let parsedDate = parseISO(date)
    let adjustedTimeZone = add(parsedDate, {
      hours: 7,
    })
    let formattedDate = format(adjustedTimeZone, "MMMM dd, yyyy")
    return formattedDate
  }

  return (
    <div style={{ color: "red" }}>
      <div>
        <Header as="h1" color="red" textAlign="center">
          {" "}
          Title: {fuze.Title}{" "}
        </Header>
      </div>
      <Container>
        <Segment.Group>
          <Segment inverted textAlign="center">
            Title: {fuze.Title}
          </Segment>
          <Segment inverted textAlign="center">
            startDate: {convertDate(fuze.startDate)}
          </Segment>
          <Segment inverted textAlign="center">
            endDate: {convertDate(fuze.endDate)}
          </Segment>
          <Segment inverted textAlign="center">
            startTime: {fuze.startTime}
          </Segment>
          <Segment inverted textAlign="center">
            {" "}
            endTime: {fuze.endTime}
          </Segment>
          <Segment inverted textAlign="center">
            description: {fuze.description}
          </Segment>
          <Segment inverted textAlign="center">
            venue: {fuze.venue}
          </Segment>
          <Segment inverted textAlign="center">
            tags: {fuze.tags}
          </Segment>
          <Segment inverted textAlign="center">
            organizer: {fuze.organizer}
          </Segment>
          <Segment inverted textAlign="center">
            whereIFoundThisEvent2: {fuze.whereIFoundThisEvent2}
          </Segment>
        </Segment.Group>
      </Container>
      <Container>
        <Segment inverted>
          <Button color="green" as={Link} to="/admin/update">
            <Button.Content visible> BACK</Button.Content>
          </Button>
        </Segment>
      </Container>
    </div>
  )
}

export default ViewFuze
