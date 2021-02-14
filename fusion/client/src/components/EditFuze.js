

import React, {useState, useEffect} from'react';
import axios from 'axios';
import {useHistory, useParams} from 'react-router-dom';
import { Button, Checkbox, Form, Segment } from 'semantic-ui-react'
//import { Link } from 'react-router-dom'


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
         <Segment>
       <h1>Edit fuze</h1>
        </Segment>
        <Segment>
      <Form onSubmit = {e => onSubmit(e) }>
     
    <Form.Field>
      <label >startDate</label>
      <input type="text" placeholder="startDate"  name = "startDate" value = {startDate}  onChange={e => onInputChange(e)} />
     </Form.Field>
    <Form.Field>
      <label>endDate</label>
      <input type="text" placeholder='endDate'  name = "endDate" value = {endDate}  onChange={e => onInputChange(e)} />
    </Form.Field>
    <Form.Field>
      <label>startTime</label>
      <input type="text" placeholder='startTime' name = "startTime" value = {startTime}  onChange={e => onInputChange(e)}  />
    </Form.Field>
    <Form.Field>
      <label>endTime</label>
      <input type="text" placeholder='endTime' name = "endTime" value = {endTime}  onChange={e => onInputChange(e)}    />
    </Form.Field>
    <Form.Field>
      <label>Title</label>
      <input type="text" placeholder='Title'  name = "Title" name = "Title" value = {Title}  onChange={e => onInputChange(e)}   />
    </Form.Field>
    <Form.Field>
      <label>description</label>
      <input type="text" placeholder='description' name = "description" value = {description}  onChange={e => onInputChange(e)}   />
    </Form.Field>
    <Form.Field>
      <label>venue</label>
      <input type="text" placeholder='venue' name = "venue" value = {venue}  onChange={e => onInputChange(e)}   />
    </Form.Field>
    <Form.Field>
      <label>tags</label>
      <input type="text" placeholder='tags' name = "tags" value = {tags}  onChange={e => onInputChange(e)}    />
    </Form.Field>
    
    <Form.Field>
      
      <label>organizer</label>
      <input type="text" placeholder='organizer' name = "organizer" value = {organizer}  onChange={e => onInputChange(e)}   />
    </Form.Field>
    <Form.Field>
      <label>whereIFoundThisEvent2</label>
      <input type="text" placeholder='whereIFoundThisEvent2' name = "whereIFoundThisEvent2" value = {whereIFoundThisEvent2}  onChange={e => onInputChange(e)}   />
    </Form.Field>

    <Form.Field>
      <Checkbox label='Are you sure?' />
    </Form.Field>
    <Button type='submit'  >CONFIRM </Button>
  </Form>
  </Segment>
  </Segment.Group>
     </div> 
  )
};

export default EditFuze;