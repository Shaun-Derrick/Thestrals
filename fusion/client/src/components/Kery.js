import React from 'react'
import NavBar from "./NavBar"
import Logo from "./Logo"
import Banner from "./Banner"
import "../stylesheets/about.css"
import { Button, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
const Kery = () => {
    return (
        <div id="profilePage">
        <NavBar />
        <Logo />
        <Banner />
        <div id="ProfileMainContainer">
            <div id="KeryPicProfilePage"></div>
          

            <div id="ProfileDescription">
             
                <h1 id="profileName">Meet Kery Long of Cohort 5!</h1>
                <p id="profileText">Kery is a born and raised Calgarian who loves collaboration and teamwork. An avid hockey fan, Kery has always found herself drawn to roles that are rooted in people working together. Kery has spent her career working for Calgary hardware/software companies, in roles such as Client/Technical Support Specialist and as a Technical Writer. Since day one of the EvolveU program, Kery has been a pillar of positivity/enthusiasm for the learners in the cohort. She believes that technology has the potential to make life better for people.</p><br />

                <p id="profileText">For the final project in the program, Kery is working with her team to develop "FUSION," an app that makes innovation/tech networking events more accessible. In fact, this project was inspired by a fellow Rainforest Alberta colleage and industry professional Debbie Butt, who asked Kery and her team to help build an app to bring these events together in one place.</p>

                <p id="profileText">Kery's advice to future learners in the program is "Don't get down on yourself and remember that the challenging times teach you the most. Regardless of the struggle you WILL find a way out. Reach out for support when you need it."</p>

                <p id="profileText">Curious to learn more? Reach out and connect with Kery!</p>

                <p id="profileText">P.S. Kery is a brain cancer survivor!</p>

                <p id="profileText">#evolveuyyc #fullstackdeveloper</p>
                <div id="ProfileBottomLine">
                <p id="profileText">< a href="https://www.linkedin.com/in/debbie-butt-65040490/">LinkedIn Profile</a></p>
                <Link to="/about"><Button id="ProfileBackButton" class="ui button">Back to team </Button></Link>
                </div>
            </div>
        </div>
        </div>
    )}

export default Kery