import React from 'react';
import emailjs from 'emailjs-com';

import '../stylesheets/index.css'
import '../stylesheets/Forms.css'

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_tbqou58', 'contact_form', e.target, 'user_bR0FMltkB3L8nvg1n8NWe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  

  return (
    <div id ="ContactUsForm">
    <form className="contact-form" onSubmit={sendEmail}>

      <label id = "ContactFormLabel">First Name</label> 
      <input id="ContactFormInput" type="text" name="submitter_firstName" />
     
      <label id = "ContactFormLabel">Last Name</label>
      <input id="ContactFormInput" type="text" name="submitter_lastName" />
      
      <label id = "ContactFormLabel">Email Address</label>
      <input id="ContactFormInput" type="email" name="submitter_email" />
     
      <label id = "ContactFormLabel">Phone Number</label> 
      <input id="ContactFormInput" type="text" name="submitter_contact_number" />
      
      <label id ="ContactFormLabel">Fuze details</label>
    
      <textarea id = "ContactFormInput" name="fuze_details"  placeholder='Please be as specific as possible'/>
      
      <input id="contactFormSubmitButton" type="submit" value="Send" />
    </form></div>
  );
}


