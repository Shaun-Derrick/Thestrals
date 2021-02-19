import React from 'react';
import emailjs from 'emailjs-com';
import { Button, Form, Label } from 'semantic-ui-react'
import '../stylesheets/index.css'
import '../stylesheets/Forms.css'

const ContactUsform = () => {

  function sendEmail(contactForm) {
    contactForm.preventDefault();

    emailjs.sendForm('service_mobcm1r', 'template_j0vh8zh', contactForm.target, 'user_bR0FMltkB3L8nvg1n8NWe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div id ="ContactUsForm">
    <Form className="contact-form" onSubmit={sendEmail}>
      <Form.Field>
      <Label id = "ContactFormLabel">First Name</Label> 
      <input id="ContactFormInput" type="text" name="submitter_firstName" />
      </Form.Field>
     <Form.Field>
      <Label id = "ContactFormLabel">Last Name</Label>
      <input id="ContactFormInput" type="text" name="submitter_lastName" />
      </Form.Field>
      <Form.Field>
      <Label id = "ContactFormLabel">Email Address</Label>
      <input id="ContactFormInput" type="email" name="submitter_email" />
      </Form.Field>
      <Form.Field>
      <Label id = "ContactFormLabel">Phone Number</Label> 
      <input id="ContactFormInput" type="text" name="submitter_contact_number" />
      </Form.Field>
      <Label id ="ContactFormLabel">Fuze details</Label>
      <Form.Field>
      <textarea id = "ContactFormInput" name="fuze_details"  placeholder='Please be as specific as possible'/>
      </Form.Field>
      <Button id="contactFormSubmitButton" type="submit" value="Submit" />
    </Form></div>
  );
}
export default ContactUsform