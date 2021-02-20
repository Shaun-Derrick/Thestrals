import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Form, Segment, Header, Label } from 'semantic-ui-react'
import AdminTagDropdown from './AdminDropdown'
import { Link } from 'react-router-dom'
import "../../stylesheets/AdminDropdown.css"


const CreateFuze = () => {
    let history = useHistory();
    //destructuring for dynamic routing for id with useParams
    const { _id } = useParams();
    //alert(_id);
    // we r using useState to store an added Fuze in a state
    // in () of useState we  have given an initial value
    const [currentFilters, setcurrentFilters] = useState([])
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
    const { startDate, endDate, startTime, endTime, Title, description, venue, tags, organizer, whereIFoundThisEvent2 } = fuze;

    // useEffect(() => {
    //to load a specific fuze for edit
    //so we use get

    //     const loadFuze = async () => {
    //         const result = await axios.get(`/Fuzes/${_id}`);
    //         setFuze(result.data);
    //     }
    //     loadFuze()
    // }, []);

    const onInputChange = event => {
        let nameOfInputField = event.target.name;
        let valueOfInputField = event.target.value;
        console.log("new input for field: ", nameOfInputField);
        console.log("typeof input value:", typeof valueOfInputField);
        console.log("input value:", valueOfInputField);

        setFuze((curValue) => { return { ...curValue, [nameOfInputField]: valueOfInputField } });
    }

    const onTagChange = TagDropdown => {
       let tagChoice =document.querySelector('input[name=tags]').value
       console.log(tagChoice)
        setFuze({...fuze, 'tags': tagChoice});
        console.log('just a simple console.log')

    // to show a specfic fuze's details that we want to edit
    const onSubmit = async e => {
        e.preventDefault();
        await axios.post(`/Fuzes/`, fuze);
        history.push("/admin/create");
        console.info('Creating Fuze')
    };

    return (
        <div>
            <Segment.Group>
                <Segment inverted>
                    <Header as='h1' content='Create a fuze' color='red' textAlign='center' />
                </Segment>
                <Segment inverted>
                    <Form inverted id='CreateFuzeForm'>
                        <Form.Field>
                            <Label id='FormLabel'>startDate</Label>
                            <input type="date" placeholder="startDate" name="startDate" id='FormInput' value={startDate || ""} onChange={e => onInputChange(e)} />
                        </Form.Field>
                        <Form.Field>
                            <Label id='FormLabel'>endDate</Label>
                            <input type="date" placeholder='endDate' name="endDate" id='FormInput' value={endDate || ""} onChange={e => onInputChange(e)} />
                        </Form.Field>
                        <Form.Field>
                            <Label id='FormLabel'>startTime</Label>
                            <input type="time" placeholder='startTime' name="startTime" id='FormInput' value={startTime || ""} onChange={e => onInputChange(e)} />
                        </Form.Field>
                        <Form.Field>
                            <Label id='FormLabel'>endTime</Label>
                            <input type="time" placeholder='endTime' name="endTime" id='FormInput' value={endTime || ""} onChange={e => onInputChange(e)} />
                        </Form.Field>
                        <Form.Field>
                            <Label id='FormLabel'>Title</Label>
                            <input type="text" placeholder='Title' name="Title" id='FormInput' value={Title || ""} onChange={e => onInputChange(e)} />
                        </Form.Field>
                        <Form.Field>
                            <Label id='FormLabel'>description</Label>
                            <input type="text" placeholder='description' name="description" id='FormInput' value={description || ""} onChange={e => onInputChange(e)} />
                        </Form.Field>
                        <Form.Field>
                            <Label id='FormLabel'>venue</Label>
                            <input type="text" placeholder='venue' name="venue" id='FormInput' value={venue || ""} onChange={e => onInputChange(e)} />
                        </Form.Field>
                        <Form.Field>
                        <Label id = 'FormLabel'>tags</Label>
                        
                            <AdminTagDropdown name="tags" id='TagsDropdown' updateFilter={setCurrentFilters} onChange={e => onTagChange(e)} />
                            </Form.Field>

                        <Form.Field>
                            <Label id='FormLabel'>organizer</Label>
                            <input type="text" placeholder='organizer' name="organizer" id='FormInput' value={organizer || ""} onChange={e => onInputChange(e)} />
                        </Form.Field>
                        <Form.Field>
                            <Label id='FormLabel'>where I found this event</Label>
                            <input type="text" placeholder='where I found this event' name="whereIFoundThisEvent2" id='FormInput' value={whereIFoundThisEvent2 || ""} onChange={e => onInputChange(e)} />
                        </Form.Field>
                        <Button animated='fade' type="submit" color='green' onClick={e => { onSubmit(e) }} as={Link} to="/admin/create">
                            <Button.Content visible>submit</Button.Content>
                            <Button.Content hidden>Creating fuze </Button.Content>
                        </Button>
                    </Form>
                </Segment>
            </Segment.Group>
        </div>
    )
};
}
export default CreateFuze;