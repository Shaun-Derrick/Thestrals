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

      
        {/* const GridExampleDoubling  = () =(
          
        <Grid id="TeamMemberGrid">
          <Grid.Row centered columns={3}>
            <Grid.Column>
              
            </Grid.Column>
            <Grid.Column>
              
            </Grid.Column>
            <Grid.Column>
              
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered columns={3}>
            <Grid.Column>
              <h2 id="TeamMemName">Danny Nguyen</h2>
            </Grid.Column>
            <Grid.Column>
              <h2 id="TeamMemName">DebbieButt</h2>
            </Grid.Column>
            <Grid.Column>
              <h2 id="TeamMemName">Kery Long</h2>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row centered columns={3}>
            <Grid.Column>
              <p>Developer</p>
            </Grid.Column>
            <Grid.Column>
              <p>PO & Adminitrator</p>
            </Grid.Column>
            <Grid.Column>
              <p>Developer</p>
            </Grid.Column>
          </Grid.Row>
          </Grid>
          <Grid>
          <Grid.Row centered columns={2}>
            <Grid.Column>
              <div id="ShaunprofilePicDiv"></div>
            </Grid.Column>
            <Grid.Column>
              <div id="SidprofilePicDiv"></div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered columns={2}>
            <Grid.Column>
              <h2>Shaun Derrick</h2>
            </Grid.Column>
            <Grid.Column>
              <h2>Siddarth(Sid) Choppra</h2>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered columns={2}>
            <Grid.Column>
              <p>Developer</p>
            </Grid.Column>
            <Grid.Column>
              <p>Developer</p>
            </Grid.Column>
          </Grid.Row>
        </Grid> */}
        </div>

   

    

  )
};
export default AboutUs;