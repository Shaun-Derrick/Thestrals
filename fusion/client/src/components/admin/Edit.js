import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Form, Segment, Header, Label } from 'semantic-ui-react'
import AdminTagDropdown from './AdminDropdown'
import { Link } from 'react-router-dom'
import { parseISO, add, format } from 'date-fns'

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

    function convertDate(date) {
        if (date === null || date === undefined || date === "") {
            return undefined
        }
        let parsedDate = parseISO(date)
        let adjustedTimeZone = add(parsedDate, {
            hours: 7
        })
        let formattedDate = format(adjustedTimeZone, "MMMM dd, yyyy")
        return (formattedDate)
    }

    useEffect(() => {
        onTagChange()
    }, [currentFilters])

    const onInputChange = event => {
        let nameOfInputField = event.target.name;
        let valueOfInputField = event.target.value;
        setFuze((curValue) => { return { ...curValue, [nameOfInputField]: valueOfInputField } });
    }

    const onTagChange = TagDropdown => {
        let tagChoice = document.querySelector('input[name=tags]').value
        setFuze((curValue) => { return { ...curValue, 'tags': tagChoice } });
    }

    const onTimeChange = event => {
        let timeChoice = event.target.name;
        let timeValue = event.target.value;
        let timeHour = (timeValue.slice(0, 2))
        let timeMinute = (timeValue.slice(3, 5))
        let newHour= ""
        let AMPM=""
        switch (timeHour) {
            case '00':
                newHour="12"
                AMPM="AM"
                break; 
            case '01':
                newHour="1"
                AMPM="AM"
                break;
            case '02':
                newHour="2"
                AMPM="AM"
                break;
            case '03':
                newHour="3"
                AMPM="AM"
                break;
            case '04':
                newHour="4"
                AMPM="AM"
                break;
            case '05':
                newHour="5"
                AMPM="AM"
                break;
            case '06':
                newHour="6"
                AMPM="AM"
                break;
            case '07':
                newHour="7"
                AMPM="AM"
                break;
            case '08':
                newHour="8"
                AMPM="AM"
                break;
            case '09':
                newHour="9"
                AMPM="AM"
                break;
            case '10':
                newHour="10"
                AMPM="AM"
                break;
            case '11':
                newHour="11"
                AMPM="AM"
                break;
            case '12':
                newHour="12"
                AMPM="PM"
                break;
            case '13':
                newHour="1"
                AMPM="PM"
                break;
            case '14':
                newHour="2"
                AMPM="PM"
                break;
            case '15':
                newHour="3"
                AMPM="PM"
                break;
            case '16':
                newHour="4"
                AMPM="PM"
                break;
            case '17':
                newHour="5"
                AMPM="PM"
                break;
            case '18':
                newHour="6"
                AMPM="PM"
                break;
            case '19':
                newHour="7"
                AMPM="PM"
                break;
            case '20':
                newHour="8"
                AMPM="PM"
                break;
            case '21':
                newHour="9"
                AMPM="PM"
                break;
            case '22':
                newHour="10"
                AMPM="PM"
                break;
            case '23':
                newHour="11"
                AMPM="PM"
                break;
            default:
                newHour=""
                AMPM=""
                break;
        }
        let finalTime= `${newHour}:${timeMinute} ${AMPM}`
        setFuze((curValue) => { return { ...curValue, [timeChoice]: finalTime } });
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
                            <input type="time" placeholder='startTime' name="startTime" value={startTime} onChange={e => onTimeChange(e)} />
                        </Form.Field>
                        <Form.Field>
                            <Label color='red' horizontal>endTime</Label>
                            {endTime}
                            <input type="time" placeholder='endTime' name="endTime" value={endTime} onChange={e => onTimeChange(e)} />
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
                            <Label id='FormLabel' color='red' horizontal>tags</Label>
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