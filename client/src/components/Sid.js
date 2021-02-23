import React from "react"
import NavBar from "./NavBar"
import Logo from "./Logo"
import Banner from "./Banner"
import "../stylesheets/about.css"
import { Button, Icon } from "semantic-ui-react"
import { Link } from "react-router-dom"
const Sid = () => {
  return (
    <div id="profilePage">
      <NavBar />
      <Logo />
      <Banner />
      <div id="ProfileMainContainer">
        <div id="SidPicProfilePage"></div>

        <div id="ProfileDescription">
          <h1 id="profileName">Meet Siddharth(Sid) Chopra of Cohort 5!</h1>
          <p id="profileText">
            Sid holds a Master's Degree in Physics and was a Physics Professor
            in India before settling in Calgary in 2019. Passionate about
            science, technology, and problem solving, Sid was a perfect fit for
            the EvolveU program. He has particularly enjoyed collaborating with
            his peers and meeting so many amazing like-minded people.
          </p>
          <br />

          <p id="profileText">
            For their final project, Sid and his team are creating "FUSION,"
            which was inspired by his teammate Kery Long's conversation with
            Debbie Butt at Rainforest Alberta. By creating "FUSION," Sid and his
            team are hoping to improve accessibility and awareness of
            innovation/tech networking events in Calgary.
          </p>

          <p id="profileText">
            Sid plans to continue exploring the world of data science and back
            end development after the program. His advice for future learners is
            inspired by Robert Frost: "The woods are lovely, dark and deep, but
            I have promises to keep, And miles to go before I sleep." Sid
            encourages you to "Keep working and pushing yourself, and everything
            will be fine."
          </p>
          <p id="profileText">
            EvolveU is grateful for Sid's sense of humour, his ability to
            approach a challenge with a critical thinking mindset, and his
            willingness to always give 110%.
          </p>

          <p id="profileText">
            Curious to learn more? Reach out and connect with Sid!
          </p>

          <p id="profileText">#evolveuyyc #fullstackdeveloper</p>
          <div id="ProfileBottomLine">
            <p id="profileText">
              <a href="https://www.linkedin.com/in/sidchopp/" target="_blank">
                LinkedIn Profile
              </a>
            </p>
            <Link to="/about">
              <Button id="ProfileBackButton" class="ui button">
                Back to team{" "}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sid
