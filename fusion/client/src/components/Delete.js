import React from 'react';
import { useState, useEffect } from 'react';
import { Button, Table, Checkbox, Icon, Segment, SegmentGroup, Dropdown, Container, ButtonGroup, Header } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import DropdownBar from './DropdownBar';
import Filter from './Filter';
import AnnotationUpdate from './AnnotationUpdate';


const style = {
  h1: {
    marginTop: '3em',
  },
  h2: {
    margin: '4em 0em 2em',
  },
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  },
  last: {
    marginBottom: '300px',
  },
}

const Delete = () => {
   const [fuzes, setFuze] = useState([]);

   useEffect(() => {
   
    loadFuzes();
    console.log("Loading full list of fuzes..")
  }, []);

   // from Mongo DB
   const loadFuzes = async () => {
    const result = await axios.get("/Fuzes");
    console.log(`This is the full list of fuzes:`, result);
    setFuze(result.data);
    //to get data in reverse order
    //setFuze(result.data.reverse());
  }

  

  return (
    <div>
      <Segment.Group>
      <Segment inverted>
            
            <Header as='h1' color='red' content='Search from Tags' style={style.h1} textAlign='left' />
      </Segment>
        
     
      
      <Header as='h1' color='red' content='List of FUZES' style={style.h1} textAlign='center' />

        <Segment padded='very' inverted>
          <Table celled inverted selectable>
            <Table.Header>
              <Table.Row>
                
                <Table.HeaderCell  textAlign='center'>startDate</Table.HeaderCell>
                <Table.HeaderCell  textAlign='center'>endDate</Table.HeaderCell>
                {/* <Table.HeaderCell>startTime</Table.HeaderCell>
                <Table.HeaderCell>endTime</Table.HeaderCell> */}
                <Table.HeaderCell  textAlign='center'>Title</Table.HeaderCell>
                {/* <Table.HeaderCell>description</Table.HeaderCell> */}
                {/* <Table.HeaderCell>venue</Table.HeaderCell>
                <Table.HeaderCell>tags</Table.HeaderCell> */}
                {/* <Table.HeaderCell>organizer</Table.HeaderCell>
                <Table.HeaderCell>whereIFoundThisEvent2</Table.HeaderCell> */}
                <Table.HeaderCell  textAlign='center'>Action</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
           
            <Table.Body>
    {fuzes.map((fuze, index) => (
      <Table.Row>
        <Table.Cell singleLine  textAlign='center'>
        {fuze.startDate}
        </Table.Cell>
        <Table.Cell singleLine  textAlign='center'>{fuze.endDate}</Table.Cell>
        
        <Table.Cell singleLine textAlign='center' >
        {fuze.Title}
        </Table.Cell>
        {/* <Table.Cell>
        {fuze.description}
        </Table.Cell> */}
        {/* <Table.Cell>
        {fuze.venue}
        </Table.Cell> */}
        <Table.Cell>
        <Segment inverted>
                    

                    
                    <Button inverted color='red' animated='fade' as={Link} to={`/fuzes/delete/${fuze._id}`}>
                      <Button.Content visible>DELETE Fuze </Button.Content>
                      <Button.Content hidden >I want to delete this Fuze </Button.Content>
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
};

export default Delete;