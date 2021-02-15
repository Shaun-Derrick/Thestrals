import React from 'react';




import { useState, useEffect } from 'react';
import { Button, Table, Checkbox, Icon, Segment, SegmentGroup, Dropdown, Container, ButtonGroup } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom'
//import DropdownBar from '../DropdownBar';


const Update = () => {

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

// for DELETE
  // const deleteFuze = async _id => {
  //   await axios.delete(`/Fuzes/${_id}`);
  //   loadFuzes();
  // }
  
  return (
    <div>
     
      

     
      

      <Segment.Group>
        
        

      
        <Segment>
          <h1>Full List of Fuzes</h1>
        </Segment>

        <Segment padded='very' inverted>
          <Table celled inverted selectable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>startDate</Table.HeaderCell>
                <Table.HeaderCell>endDate</Table.HeaderCell>
                {/* <Table.HeaderCell>startTime</Table.HeaderCell>
                <Table.HeaderCell>endTime</Table.HeaderCell> */}
                <Table.HeaderCell>Title</Table.HeaderCell>
                {/* <Table.HeaderCell>description</Table.HeaderCell> */}
                {/* <Table.HeaderCell>venue</Table.HeaderCell>
                <Table.HeaderCell>tags</Table.HeaderCell> */}
                {/* <Table.HeaderCell>organizer</Table.HeaderCell>
                <Table.HeaderCell>whereIFoundThisEvent2</Table.HeaderCell> */}
                <Table.HeaderCell>Action</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
           
            <Table.Body>
    {fuzes.map((fuze, index) => (
      <Table.Row>
        <Table.Cell singleLine>
        {fuze.startDate}
        </Table.Cell>
        <Table.Cell singleLine>{fuze.endDate}</Table.Cell>
        
        <Table.Cell >
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
                    {/* <Button size='tiny'as={Link} to={`/fuzes/edit/${fuze._id}`}>Edit Fuze</Button> */}

                    <Button inverted color='red' animated='fade' as={Link} to={`/fuzes/edit/${fuze._id}`}>
                      <Button.Content visible>Edit Fuze </Button.Content>
                      <Button.Content hidden >Are you sure?</Button.Content>
                    </Button>

                    <Button inverted color='green' animated='fade' as={Link} to={`/view fuzes/${fuze._id}`}>
                      <Button.Content visible>View Fuze</Button.Content>
                      <Button.Content hidden >View </Button.Content>
                    </Button>

                    {/* <Button inverted color='green'animated='fade' as={Link} to={`/view fuzes/${fuze._id}`}>View Fuze</Button> */}

                     {/* \delete button below. UnComment only when required */}
                     {/* <Button size='tiny' color='red' 
                      onClick={() => deleteFuze(fuze._id)}
                       >Delete Fuze</Button> 
                      */}
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