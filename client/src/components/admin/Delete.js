import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import AdminNav from "./AdminNav"
import AdminText from "./AdminText"
import Logo from "../Logo"
import { Button, Table, Segment, Header } from "semantic-ui-react"
import "../../stylesheets/admin.css"
import "../../stylesheets/index.css"

const Delete = () => {
  const [fuzes, setFuze] = useState([])

  useEffect(() => {
    loadFuzes()
  }, [])

  // from Mongo DB
  const loadFuzes = async () => {
    const result = await axios.get("/Fuzes")
    setFuze(result.data)
  }

  return (
    <div>
      <AdminNav />
      <Logo />
      <AdminText />
      <Segment.Group>
        <Header
          as="h1"
          color="red"
          content="List of Fuzes"
          textAlign="center"
        />
        <Segment inverted>
          <Button
            floated="right"
            inverted
            color="green"
            animated="fade"
            as={Link}
            to="/admin"
          >
            <Button.Content visible>BACK </Button.Content>
            <Button.Content hidden> BACK </Button.Content>
          </Button>
        </Segment>
        <Segment padded="very" inverted>
          <Table celled inverted selectable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign="center">
                  startDate
                </Table.HeaderCell>
                <Table.HeaderCell textAlign="center">endDate</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Title</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Action</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {fuzes.map((fuze, index) => (
                <Table.Row>
                  <Table.Cell singleLine textAlign="center">
                    {fuze.startDate.slice(0, 10)}
                  </Table.Cell>
                  <Table.Cell singleLine textAlign="center">
                    {fuze.endDate.slice(0, 10)}
                  </Table.Cell>
                  <Table.Cell singleLine textAlign="center">
                    {fuze.Title}
                  </Table.Cell>
                  <Table.Cell>
                    <Segment inverted>
                      <Button
                        fluid
                        inverted
                        color="red"
                        animated="fade"
                        as={Link}
                        to={`/admin/delete/${fuze._id}`}
                      >
                        <Button.Content visible>Delete Fuze </Button.Content>
                        <Button.Content hidden>Are you Sure? </Button.Content>
                      </Button>
                    </Segment>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Segment>
      </Segment.Group>
    </div>
  )
}

export default Delete
