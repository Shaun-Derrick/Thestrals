
import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const AdminLoginForm = () => (
  <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h1' color='red' textAlign='center'>
        {/* <Image src='/logo.png' />    */}
        Admin Login
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address or Username' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='red' fluid size='large'>
            Submit
          </Button>
        </Segment>
      </Form>
      <Message>
        Not Admin? <a href='#'>Go back to the main page</a>
      </Message>
    </Grid.Column>
  </Grid>
)

export default AdminLoginForm