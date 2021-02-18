import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table, Segment, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import AdminNav from "./AdminNav"
import AdminText from "./AdminText"
import Logo from "../Logo"
import Dropdown from "../Dropdown"
import Filter from "../Filter"
import "../../stylesheets/admin.css"

const Update = () => {
  const [fuzes, setFuze] = useState([]);
  const [currentFilters, setCurrentFilters] = useState([])

  useEffect(() => {
    loadFuzes();
  }, []);

  // from Mongo DB
  const loadFuzes = async () => {
    const result = await axios.get("/Fuzes");
    setFuze(result.data);
  }

  return (
    <div>
      <AdminNav />
      <Logo />
      <AdminText />
      <Dropdown updateFilter={setCurrentFilters} />
      <Filter
        filters={currentFilters}
        fuzeFull={fuzes}
        setFuzeFull={setFuze}
      />
      <Segment.Group>
        <Header as='h1' color='red' content='List of Fuzes' textAlign='center' />
        <Segment padded='very' inverted>
          <Table celled inverted selectable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign='center'>Date</Table.HeaderCell>
                <Table.HeaderCell textAlign='center'>End Date</Table.HeaderCell>
                <Table.HeaderCell textAlign='center'>Fuze</Table.HeaderCell>
                <Table.HeaderCell textAlign='center'>Action</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {fuzes.map((fuze, index) => (
                <Table.Row key={index} >
                  <Table.Cell singleLine textAlign='center'>
                    {fuze.startDate}
                  </Table.Cell>
                  <Table.Cell singleLine textAlign='center'>{fuze.endDate}</Table.Cell>
                  <Table.Cell singleLine textAlign='center' >
                    {fuze.Title}
                  </Table.Cell>
                  <Table.Cell>
                    <Segment inverted>
                      <Button.Group widths='2'>
                        <Button inverted color='red' as={Link} to={`/admin/update/${fuze._id}`}>
                          <Button.Content visible>Edit Fuze</Button.Content>
                        </Button>
                        <Button inverted color='green' as={Link} to={`/admin/view/${fuze._id}`}>
                          <Button.Content visible>View Fuze</Button.Content>
                        </Button>
                      </Button.Group>
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
};

export default Update;