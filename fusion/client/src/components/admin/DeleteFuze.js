import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Container, Form, Segment, Header, Icon, Label, ButtonGroup, ButtonContent } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const DeleteFuze = () => {
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

  const deleteFuze = async _id => {
    await axios.delete(`/Fuzes/${_id}`);
    loadFuze();
  }

  return (
    <div >
      <div>
        <Header as='h1' color='red' textAlign='center' > Title: {fuze.Title} </Header>
      </div>
      <Container>
        <Segment.Group inverted>
          <Segment inverted textAlign='center'> startDate: {fuze.startDate}</Segment>
          <Segment inverted textAlign='center'>endDate: {fuze.endDate}</Segment>
          <Segment inverted textAlign='center'>startTime: {fuze.startTime}</Segment>
          <Segment inverted textAlign='center'> endTime: {fuze.endTime}</Segment>
          <Segment inverted textAlign='center'>Title: {fuze.Title}</Segment>
          <Segment inverted textAlign='center'>description: {fuze.description}</Segment>
          <Segment inverted textAlign='center'>venue: {fuze.venue}</Segment>
          <Segment inverted textAlign='center'>tags: {fuze.tags}</Segment>
          <Segment inverted textAlign='center'>organizer: {fuze.organizer}</Segment>
          <Segment inverted textAlign='center'>whereIFoundThisEvent2: {fuze.whereIFoundThisEvent2}</Segment>
          <Container inverted>
            <Button floated='left' color='red' animated='fade' onClick={() => deleteFuze(fuze._id)} as={Link} to="/admin/update">
              <Button.Content visible>DELETE </Button.Content>
              <Button.Content hidden >Are you Sure? </Button.Content>
            </Button>
            <Button floated='right' inverted color='green' animated='fade' as={Link} to='/admin/delete'>
              <Button.Content visible>CANCEL </Button.Content>
              <Button.Content hidden >Don't delete </Button.Content>
            </Button>
          </Container>
        </Segment.Group >
      </Container>
    </div>
  )
};

export default DeleteFuze;