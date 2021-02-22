import React from 'react'
import NavBar from "./NavBar"
import Logo from "./Logo"
import ContactUsStatement from "./ContactUsStatement"
import Banner from "./Banner"
import ContactUsDescription from "./ContactUsDescription"
import ContactUsForm from "./ContactForm"
import "../stylesheets/index.css"

const ContactUs = () => {
  return(
    <div>
      <NavBar/>
      <Logo />
      <ContactUsStatement />
      <Banner />
      <ContactUsDescription />
      <ContactUsForm />
    </div>
  )
};
export default ContactUs;