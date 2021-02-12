import React from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom';
// Image

const AdminLogin = () => {
  return(
    <div><h1>Admin Login</h1>
     <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        {/* <Image src='/logo.png' /> Log-in to your account */}
      </Header>
      <Form size='large'>
        <Segment>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />
<Link to="/admin">
          <Button color='teal' fluid size='large'>
          Login
          </Button>
          </Link>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
    </div>
  )
};

export default AdminLogin;