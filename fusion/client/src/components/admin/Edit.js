import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Form, Segment, Header, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const EditFuze = () => {
    let history = useHistory();
    //destructuring for dynamic routing for id with useParams
    const { _id } = useParams();
    //alert(_id);
    // we r using useState to store an added Fuze in a state
    // in () of useState we  have given an initial value
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

    const onInputChange = e => {
        // console.log(e.target.value);
        setFuze({ ...fuze, [e.target.name]: e.target.value });
    };

    // to show a specfic fuze's details that we want to edit
    const onSubmit = async e => {
        e.preventDefault();
        await axios.post(`/Fuzes`, fuze);
        history.push("/admin/create");
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
                            <input type="text" placeholder="startDate" name="startDate" value={startDate || ""} onChange={e => onInputChange(e)} />
                        </Form.Field>
                        <Form.Field>
                            <Label color='red' horizontal>endDate</Label>
                            <input type="text" placeholder='endDate' name="endDate" value={endDate || ""} onChange={e => onInputChange(e)} />
                        </Form.Field>
                        <Form.Field>
                            <Label color='red' horizontal>startTime</Label>
                            <input type="text" placeholder='startTime' name="startTime" value={startTime || ""} onChange={e => onInputChange(e)} />
                        </Form.Field>
                        <Form.Field>
                            <Label color='red' horizontal>endTime</Label>
                            <input type="text" placeholder='endTime' name="endTime" value={endTime || ""} onChange={e => onInputChange(e)} />
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
                            <Label color='red' horizontal>tags</Label>
                            <input type="text" placeholder='tags' name="tags" value={tags || ""} onChange={e => onInputChange(e)} />
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