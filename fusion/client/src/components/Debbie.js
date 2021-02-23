import React from 'react'
import NavBar from "./NavBar"
import Logo from "./Logo"
import Banner from "./Banner"
import "../stylesheets/about.css"
import { Button, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
const Debbie = () => {
    return (
        <div id="profilePage">
        <NavBar />
        <Logo />
        <Banner />
        <div id="ProfileMainContainer">
            <div id="DebbiePicProfilePage"></div>
          

            <div id="ProfileDescription">
             
                <h1 id="profileName">Meet Debbie Butt!</h1>
                <p id="profileText">Debbie and Kery met at a Rainforest Alberta networking event and that connection is how Fusion came to be!</p><br />
                <p id="profileText">Debbie is a self-employed data and accounting consultant and an active member of Data for Good YYC, CivicTechYYC, and Rainforest Alberta.</p><br />
                <p id="profileText"> In 2017 Debbie began to explore the tech sector in Calgary by attending 100’s of events/meetup/conferences and discovered their personal and professional value. What she also discovered is these events are posted on various platforms (Eventbrite, Meetup, and individual organization websites) and how time consuming it can be to find and keep track of numerous events. </p><br />
                <p id="profileText">This is how she came up with the idea for a central calendar that lists relevant networking and educational events in one place. A one-stop shopping platform to find events to attend so no one misses out.</p><br />
                <p id="profileText">When Debbie is not working on Fusion-Alberta, you can find her fanatically riding her bike, a new hobby she gained thanks to COVID-19.</p><br /> 
                <div id="ProfileBottomLine">
                <p id="profileText">< a href="https://www.linkedin.com/in/debbie-butt-65040490/" target="_blank">LinkedIn Profile</a></p>
                <Link to="/about"><Button id="ProfileBackButton" class="ui button">Back to team </Button></Link>
                </div>
            </div>
        </div>
        </div>
    )}

export default Debbie