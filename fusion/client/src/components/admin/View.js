import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Container, Segment, Header, Button } from 'semantic-ui-react';

const ViewFuze = () => {
    //destrcturing of id by hook useParams
    const { _id } = useParams();
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

    useEffect(() => {
        loadFuze();
    }, []);

    const loadFuze = async () => {
        const result = await axios.get(`/Fuzes/${_id}`);
        setFuze(result.data);
    };

    return (
        <div >
            <Segment.Group inverted>
                <Header as='h1' color='red' textAlign='center' > Title: {fuze.Title} </Header>
                <Segment inverted textAlign='center'>startDate: {fuze.startDate.slice(0, 10)}</Segment>
                <Segment inverted textAlign='center'>endDate: {fuze.endDate.slice(0, 10)}</Segment>
                <Segment inverted textAlign='center'>startTime: {fuze.startTime}</Segment>
                <Segment inverted textAlign='center'> endTime: {fuze.endTime}</Segment>
                <Segment inverted textAlign='center'>Title: {fuze.Title}</Segment>
                <Segment inverted textAlign='center'>description: {fuze.description}</Segment>
                <Segment inverted textAlign='center'>venue: {fuze.venue}</Segment>
                <Segment inverted textAlign='center'>tags: {fuze.tags}</Segment>
                <Segment inverted textAlign='center'>organizer: {fuze.organizer}</Segment>
                <Segment inverted textAlign='center'>whereIFoundThisEvent2: {fuze.whereIFoundThisEvent2}</Segment>
                <Segment inverted>
                    <Button color='green' as={Link} to="/admin/update">
                        <Button.Content visible> BACK</Button.Content>
                    </Button>
                </Segment>
            </Segment.Group >
        </div>
    )
}

export default ViewFuze; 