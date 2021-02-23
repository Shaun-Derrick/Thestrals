import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Form, Segment, Header, Label } from 'semantic-ui-react'
import AdminTagDropdown from './AdminDropdown'
import { Link } from 'react-router-dom'
import {parseISO, add, format} from 'date-fns'

const EditFuze = () => {
    let history = useHistory();
    //destructuring for dynamic routing for id with useParams
    const { _id } = useParams();
    //alert(_id);
    // we r using useState to store an added Fuze in a state
    // in () of useState we  have given an initial value
    const [currentFilters, setCurrentFilters] = useState([])
    const [fuze, setFuze] = useState({
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
    const { startDate, endDate, startTime, endTime, Title, description, venue, tags, organizer, whereIFoundThisEvent2 } = fuze;

    useEffect(() => {
        //to load a specific fuze for edit
        //so we use get
        const loadFuze = async () => {
            const result = await axios.get(`/Fuzes/${_id}`);
            setFuze(result.data);
        }
        loadFuze()
    }, []);

    function convertDate(date){
        if(date===null || date===undefined || date===""){
          return undefined
        }
        let parsedDate= parseISO(date)
        let adjustedTimeZone= add(parsedDate, {
          hours:7
        })
        let formattedDate= format(adjustedTimeZone, "MMMM dd, yyyy")
        return(formattedDate)  
      }

      useEffect(()=>{
        onTagChange()
    }, [currentFilters])

    const onInputChange = event => {
        let nameOfInputField = event.target.name;
        let valueOfInputField = event.target.value;
        setFuze((curValue) => { return { ...curValue, [nameOfInputField]: valueOfInputField } });
    }

    const onTagChange = TagDropdown => {
        let tagChoice = document.querySelector('input[name=tags]').value
        setFuze((curValue) => { return {...curValue, 'tags': tagChoice }});
    }

    // to show a specfic fuze's details that we want to edit
    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`/Fuzes/${_id}`, fuze);
        history.push("/admin/update");
    };

    return (
        <div>
            <Segment.Group>
                <Segment inverted>
                    <Header as='h1' content='Edit fuze' color='red' textAlign='center' />
                </Segment>
                <Segment inverted>
                    <Form inverted>
                        <Form.Field>
                            <Label color='red' horizontal >startDate</Label>
                            {convertDate(startDate)}
                            <input type="date" name="startDate" value={startDate} onChange={e => onInputChange(e)} />
                        </Form.Field>
                        <Form.Field>
                            <Label color='red' horizontal>endDate</Label>
                            {convertDate(endDate)}
                            <input type="date" placeholder='endDate' name="endDate" value={endDate} onChange={e => onInputChange(e)} />
                        </Form.Field>
                        <Form.Field>
                            <Label color='red' horizontal>startTime</Label>
                            {startTime}
                            <input type="text" placeholder='startTime' name="startTime" value={startTime} onChange={e => onInputChange(e)} />
                        </Form.Field>
                        <Form.Field>
                            <Label color='red' horizontal>endTime</Label>
                            {endTime}
                            <input type="text" placeholder='endTime' name="endTime" value={endTime} onChange={e => onInputChange(e)} />
                        </Form.Field>
                        <Form.Field>
                            <Label color='red' horizontal>Title</Label>
                            <input type="text" placeholder='Title' name="Title" value={Title || ""} onChange={e => onInputChange(e)} />
                        </Form.Field>
                        <Form.Field>
                            <Label color='red' horizontal>description</Label>
                            <input type="text" placeholder='description' name="description" value={description || ""} onChange={e => onInputChange(e)} />
                        </Form.Field>
                        <Form.Field>
                            <Label color='red' horizontal>venue</Label>
                            <input type="text" placeholder='venue' name="venue" value={venue || ""} onChange={e => onInputChange(e)} />
                        </Form.Field>
                        <Form.Field>
                        <Label id='FormLabel' color='red horizontal'>tags</Label>
                        {tags}
                            <input type="text" placeholder='tags' name="tags" id='FormInput' value={currentFilters || ""} onChange={e => onTagChange(e)}>      
                            </input>
                            <AdminTagDropdown name="tags" id='TagsDropdown' updateFilter={setCurrentFilters} onChange={e => onTagChange(e)} />
                        </Form.Field>
                        <Form.Field>

                            <Label color='red' horizontal>organizer</Label>
                            <input type="text" placeholder='organizer' name="organizer" value={organizer || ""} onChange={e => onInputChange(e)} />
                        </Form.Field>
                        <Form.Field>
                            <Label color='red' horizontal>whereIFoundThisEvent2</Label>
                            <input type="text" placeholder='whereIFoundThisEvent2' name="whereIFoundThisEvent2" value={whereIFoundThisEvent2 || ""} onChange={e => onInputChange(e)} />
                        </Form.Field>
                        <Button animated='fade' type="submit" color='green' onClick={e => { onSubmit(e) }} as={Link} to="/admin/update">
                            <Button.Content visible>CONFIRM</Button.Content>
                            <Button.Content hidden>Are you sure? </Button.Content>
                        </Button>
                    </Form>
                </Segment>
            </Segment.Group>
        </div>
    )
};

export default EditFuze;