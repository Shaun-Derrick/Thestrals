import React from 'react'
import NavBar from "./NavBar"
import Logo from "./Logo"
import TeamMemberGrid from "./TeamMemberGrid"
import AboutUsStatement from "./AboutUsStatement"
import Banner from "./Banner"
import AboutUsDescription from "./AboutUsDescription"
import "../stylesheets/about.css"




const AboutUs = () => {


  return (
    <div className="AboutPage">
      <NavBar />
      <Logo />
      <AboutUsStatement />
      <Banner />
      <AboutUsDescription />
      <TeamMemberGrid />

      
       
        </div>

   

    

  )
};
export default AboutUs;