import React from 'react'
import { Button, Modal, Form, Grid, Segment} from 'semantic-ui-react'
// Header,  Image,  Message, Container

function AdminModal() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal 
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button style={{ opacity:0, margin: 10, backgroundColor: '#ff4500'}}>Admin</Button>}
    >
      <Modal.Header style={{backgroundColor:'#ff4500' }}><h1 >Admin Login</h1></Modal.Header>
      <Modal.Content image>
        {/* <Image size='medium' src='/image/red.jpg' wrapped /> */}
        <Modal.Description style={{backgroundColor:'black', margin: -21.2, borderStyle:'solid', borderColor:'#ff4500' }}>
        <div>
    {/* <Container text style={{ margin: 30}}> */}
  <Grid textAlign='center' style={{ height: '35vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 600,}}>
      {/* <Header as='h1' color='red' textAlign='center'>
        <Image src='/logo.png' />   
        Admin Login
      </Header> */}
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

          <Button color='black' fluid size='large'>
            Submit
          </Button>
        </Segment>
      </Form>
      {/* <Message>
        Not Admin? <a href='#'>Go back to the main page</a>
      </Message> */}
    </Grid.Column>
  </Grid>
  {/* </Container> */}
  </div>
        </Modal.Description>

      </Modal.Content>

      <Modal.Actions style={{backgroundColor:'#ff4500' }} >
        <Button color='black' onClick={() => setOpen(false)}>
          Cancel
        </Button>
        {/* <Button
          content="Yep, that's me"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        /> */}
      </Modal.Actions>
    </Modal>
  )
}

export default AdminModal 