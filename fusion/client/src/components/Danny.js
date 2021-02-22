import React from 'react'
import NavBar from "./NavBar"
import Logo from "./Logo"
import Banner from "./Banner"
import "../stylesheets/about.css"
import { Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom';

const Danny = () => {
    return (
    
        <div id="profilePage">
        <NavBar />
        <Logo />
        <Banner />

        
            <div id="ProfileMainContainer">
                <div id="DannyPicProfilePage"></div>
          

            <div id="ProfileDescription">
             
                <h1 id="profileName">Meet Danny Nguyen of Cohort 5!</h1>
                <p id="profileText">Highly personable and creative, Danny has extensive experience in hospitality and acting. As #gaming, #programming, and #tech have always been personal passions of his, Danny applied to EvolveU and has wholeheartedly embraced the learning experience.</p><br />
                <p id="profileText">Solution oriented with a healthy competitive edge, Danny enjoys looking at problems and collaborating with his colleagues to find the best strategic path forward. For his final project, Danny and his team team have developed "FUSION," a #mernstack app that makes innovation/tech networking events more accessible.</p><br />
                <p id="profileText">After the program, Danny plans on continuing to develop his fundamental skills to ensure he is ready for any opportunity that comes his way #growthmindset. Additionally, he will be participating in #js13kgames this August, check details out <a href="http://js13kgames.com/">here</a>. </p><br />
                <p id="profileText">For future learners, Danny encourages you to "make sure you develop your interpersonal skills because it is so important to collaborate with your team. Enjoy the process and take advantage of every single opportunity."</p><br />
                <p id="profileText">Danny is truly a #rockstar and we are so proud of him! Curious to learn more? Reach out and connect with Danny! #evolveuyyc #fullstackdeveloper #buildingwhatsnext</p><br />
                <div id="ProfileBottomLine">
                <p id="profileText"><a href="https://www.linkedin.com/in/danny-nguyen-b8306b3a/">Find Danny on LinkedIn!</a></p>
                <Link to="/about"><Button id="ProfileBackButton" class="ui button">Back to team </Button></Link>
            </div></div>
        </div>
        </div>
    )}

export default Danny
