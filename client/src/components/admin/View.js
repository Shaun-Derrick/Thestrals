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
        <div style={{ color: "red" }}>
            <div>
                <Header as='h1' color='red' textAlign='center' > Title: {fuze.Title} </Header>
            </div>
            <Container>
                <Segment.Group>
                    <Segment inverted>startDate: {fuze.startDate}</Segment>
                    <Segment inverted>endDate: {fuze.endDate}</Segment>
                    <Segment inverted>startTime: {fuze.startTime}</Segment>
                    <Segment inverted> endTime: {fuze.endTime}</Segment>
                    <Segment inverted>Title: {fuze.Title}</Segment>
                    <Segment inverted>description: {fuze.description}</Segment>
                    <Segment inverted>venue: {fuze.venue}</Segment>
                    <Segment inverted>tags: {fuze.tags}</Segment>
                    <Segment inverted>organizer: {fuze.organizer}</Segment>
                    <Segment inverted>whereIFoundThisEvent2: {fuze.whereIFoundThisEvent2}</Segment>
                </Segment.Group >
            </Container>
            <Container>
                <Segment inverted>
                    <Button color='green' as={Link} to="/admin/update">
                        <Button.Content visible> BACK</Button.Content>
                    </Button>
                </Segment>
            </Container>
        </div>
    )
}

export default ViewFuze; 