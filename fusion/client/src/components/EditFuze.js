

import React, {useState, useEffect} from'react';
import axios from 'axios';
import {useHistory, useParams} from 'react-router-dom';
import { Button, Checkbox, Form, Segment, Header , Icon,  Label} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

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

const EditFuze = () => {
  let history = useHistory();
  //destructuring for dynamic routing for id with useParams
  const {_id} = useParams();
  //alert(_id);
  // we r using useState to store an added Fuze in a state
  // in () of useState we  have given an initial value
  const [fuze,setFuze] = useState({
    "startDate": "",
    "endDate": "",
    "startTime": "",
    "endTime": "",
    "Title": "",
    "description": "",
    "venue": "",
    "tags": "",
    "organizer": "",
    "whereIFoundThisEvent2": ""
  });
//destructuring of fuze
  const {startDate, endDate, startTime, endTime, Title, description, venue, tags, organizer, whereIFoundThisEvent2 } = fuze;

  

  useEffect(() => {
        //to load a specific fuze for edit
        //so we use get

  const loadFuze = async () => {
      const result = await axios.get(`/Fuzes/${_id}`);
      console.log(`Fuze i want to edit based on id:`, result);
      setFuze(result.data);
    }
     loadFuze()
   }, []);


  const onInputChange = e => {
    // console.log(e.target.value);
    setFuze({...fuze,[e.target.name]: e.target.value});
  };
 

  // to show a specfic fuze's details that we want to edit
  const onSubmit =  async e => {
    e.preventDefault();
     await axios.put(`/Fuzes/${_id}`, fuze);
    // await axios.put(`/Fuzes`, fuze);
    history.push("/update");
    

  };
  return(
     <div>
       <Segment.Group>
         <Segment inverted>
         <Header as='h1' content='Edit fuze' color = 'red' style={style.h1} textAlign='center' />
    
        </Segment>
        <Segment  inverted>
      <Form inverted onSubmit = {e => onSubmit(e) }>
     
    <Form.Field>
      <Label color='red' horizontal >startDate</Label>
      <input type="text" placeholder="startDate"  name = "startDate" value = {startDate}  onChange={e => onInputChange(e)} />
     </Form.Field>
    <Form.Field>
      <Label color='red' horizontal>endDate</Label>
      <input type="text" placeholder='endDate'  name = "endDate" value = {endDate}  onChange={e => onInputChange(e)} />
    </Form.Field>
    <Form.Field>
      <Label color='red' horizontal>startTime</Label>
      <input type="text" placeholder='startTime' name = "startTime" value = {startTime}  onChange={e => onInputChange(e)}  />
    </Form.Field>
    <Form.Field>
      <Label color='red' horizontal>endTime</Label>
      <input type="text" placeholder='endTime' name = "endTime" value = {endTime}  onChange={e => onInputChange(e)}    />
    </Form.Field>
    <Form.Field>
      <Label color='red' horizontal>Title</Label>
      <input type="text" placeholder='Title'  name = "Title" name = "Title" value = {Title}  onChange={e => onInputChange(e)}   />
    </Form.Field>
    <Form.Field>
      <Label color='red' horizontal>description</Label>
      <input type="text" placeholder='description' name = "description" value = {description}  onChange={e => onInputChange(e)}   />
    </Form.Field>
    <Form.Field>
      <Label color='red' horizontal>venue</Label>
      <input type="text" placeholder='venue' name = "venue" value = {venue}  onChange={e => onInputChange(e)}   />
    </Form.Field>
    <Form.Field>
      <Label color='red' horizontal>tags</Label>
      <input type="text" placeholder='tags' name = "tags" value = {tags}  onChange={e => onInputChange(e)}    />
    </Form.Field>
    
    <Form.Field>
      
      <Label color='red' horizontal>organizer</Label>
      <input type="text" placeholder='organizer' name = "organizer" value = {organizer}  onChange={e => onInputChange(e)}   />
    </Form.Field>
    <Form.Field>
      <Label color='red' horizontal>whereIFoundThisEvent2</Label>
      <input type="text" placeholder='whereIFoundThisEvent2' name = "whereIFoundThisEvent2" value = {whereIFoundThisEvent2}  onChange={e => onInputChange(e)}   />
    </Form.Field>

    {/* <Form.Field>
      <Checkbox Label='Are you sure?' />
    </Form.Field> */}
     <Button  animated='fade'  color='green' as={Link} to="/update" >
        <Button.Content visible  >CONFIRM</Button.Content>
        <Button.Content hidden>Are you sure ? </Button.Content>
       
        </Button>
  </Form>
  </Segment>
  </Segment.Group>
     </div> 
  )
};

export default EditFuze;