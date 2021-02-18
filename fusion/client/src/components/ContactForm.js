import React from 'react'
import { Input, Button, Form, TextArea } from 'semantic-ui-react'
import "../stylesheets/Forms.css"
const ContactUsForm = () => {
return(

  <Form id = "ContactUsForm">
    <Form.Field>
      <label className="ContactUsFormLabel">First Name</label>
      <Input placeholder='First Name' className= 'ContactUsFormInput'/>
    </Form.Field>
    <Form.Field>
      <label className="ContactUsFormLabel">Last Name</label>
      <Input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
    <label className="ContactUsFormLabel">Email address</label>
      <Input placeholder='Email Address' />
    </Form.Field>
    <label className="ContactUsFormLabel">Fuze Information
    <TextArea placeholder="Tell us all about your Fuze. Be as specific as possible and include the following information:
    ' Start Date, End Date, Start Time, End Time, Fuze Title and Description, applicavle links, the venue and the organizer.
    Thank you."/>
    </label>
    <Button type='submit' id='contactUsFormSubmitButton'>Submit</Button>
  </Form>
)
}
export default ContactUsForm