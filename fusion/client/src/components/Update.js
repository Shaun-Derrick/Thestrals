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

        <Segment padded='very'>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>startDate</Table.HeaderCell>
                <Table.HeaderCell>endDate</Table.HeaderCell>
                {/* <Table.HeaderCell>startTime</Table.HeaderCell>
                <Table.HeaderCell>endTime</Table.HeaderCell> */}
                <Table.HeaderCell>Title</Table.HeaderCell>
                {/* <Table.HeaderCell>description</Table.HeaderCell> */}
                <Table.HeaderCell>venue</Table.HeaderCell>
                <Table.HeaderCell>tags</Table.HeaderCell>
                {/* <Table.HeaderCell>organizer</Table.HeaderCell>
                <Table.HeaderCell>whereIFoundThisEvent2</Table.HeaderCell> */}
                <Table.HeaderCell>Action</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {fuzes.map((fuze, index) => (
                <tr>
                  {/* <th scope ="row">{index + 1}</th> */}

                  <td>{fuze.startDate}</td>
                  <td>{fuze.endDate}</td>
                  {/* <td>{fuze.startTime}</td>
                  <td>{fuze.endTime}</td> */}
                  <td>{fuze.Title}</td>
                  <td>{fuze.description}</td>
                  <td>{fuze.venue}</td>
                  {/* <td>{fuze.tags}</td>
                  <td>{fuze.organizer}</td>
                  <td>{fuze.whereIFoundThisEvent2}</td> */}
                  <td>
                    <Segment>
                    <Button size='tiny'as={Link} to={`/fuzes/edit/${fuze._id}`}>Edit Fuze</Button>
                    <Button size='tiny'as={Link} to={`/view fuzes/${fuze._id}`}>View Fuze</Button>

{/* \delete button below. UnComment only when required */}
                     {/* <Button size='tiny' color='red' 
                      onClick={() => deleteFuze(fuze._id)}
                       >Delete Fuze</Button> 
                      */}
                     </Segment>
                    
                  
                  </td>

                </tr>

              ))}
            </Table.Body>
          </Table>
        </Segment>
      </Segment.Group>
    </div>
  )
};

export default Update;