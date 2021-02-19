import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Button, Container, Segment, Header, Reveal } from 'semantic-ui-react'
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

  //{ console.log(`value of startDate:`, fuze.startDate) }

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
      <Segment.Group inverted>
        <Segment inverted>
          <Button floated='right' inverted color='green' animated='fade' as={Link} to='/admin/delete'>
            <Button.Content visible>BACK </Button.Content>
            <Button.Content hidden >BACK </Button.Content>
          </Button>
        </Segment>
        <Container textAlign='left'>
        </Container>
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
        <Container inverted>
          <Button fluid color='red' animated='fade' onClick={() => deleteFuze(fuze._id)} as={Link} to="/admin/delete">
            <Button.Content visible>DELETE </Button.Content>
            <Button.Content hidden >Press ONLY if you want to permanently delete it or press BACK </Button.Content>
          </Button>
        </Container>
      </Segment.Group >
    </div>
  )
};

export default DeleteFuze;