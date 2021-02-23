import React from 'react'
import NavBar from "./NavBar"
import Logo from "./Logo"
import Banner from "./Banner"
import "../stylesheets/about.css"
import { Button, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
const Shaun = () => {
    return (
        <div id="profilePage">
        <NavBar />
        <Logo />
        <Banner />
        <div id="ProfileMainContainer">
            <div id="ShaunPicProfilePage"></div>
          

            <div id="ProfileDescription">
             
                <h1 id="profileName">Meet Shaun Derrick of Cohort 5!</h1>
                <p id="profileText">Shaun grew up in Turner Valley and spent many hours toiling on the family farm near Longview.  As an energy professional, Shaun has worked in Project and Operations Management, OHS, and as a Technical Recording Field Specialist. His various roles in the energy industry have allowed him to work on challenging projects  in many countries around the globe.  After working in Australia for 7 years, Shaun returned to AB and recognized that it was essential for him to learn new skills to open up more job opportunities. A lifelong passion for tech inspired Shaun to apply to the EvolveU program to explore a sustainable career in tech/innovation.</p><br />

                <p id="profileText">For the final project, Shaun is working with his team to develop "FUSION," an app that consolidates innovation/tech networking events in Alberta. Post program, Shaun would like to explore roles in Product Management and he is particularly interested in the integration of technology into the agricultural, forestry, and renewable resource industries.</p>

                <p id="profileText">For future learners, Shaun shares that "Even though change can make you feel anxious, it's the door to new and exciting opportunities. Society often measures learning on a stringent baseline of success or failure.  My experience at EvolveU has taught me that when learning new skills the primary goal of continuous improvement ultimately includes failure as well as achievement.  Failure is as equally important as success is in the learning process.  If nothing else it teaches us resilience as well as how not to do things in the future.  You will never succeed if you do not try.... and the only sure path to failure is to never try at all."</p>
                <p id="profileText">EvolveU is grateful for Shaun's open mindedness, love for learning, and collaborative and kind nature. He is truly a team player!</p>

                <p id="profileText">Curious to learn more? Reach out and connect with Shaun!</p>

                                <p id="profileText">#evolveuyyc #fullstackdeveloper</p>
                <div id="ProfileBottomLine">
                <p id="profileText">< a href="https://www.linkedin.com/in/shaun-derrick-11642755/" target="_blank">LinkedIn Profile</a></p>
                <Link to="/about"><Button id="ProfileBackButton" class="ui button">Back to team </Button></Link>
                </div>
            </div>
        </div>
        </div>
    )}

export default Shaun