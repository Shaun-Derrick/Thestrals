import React from "react"
import NavBar from "./NavBar"
import { Container } from "semantic-ui-react"
import "../stylesheets/index.css"

const About = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. Done
        </p>
      </Container>
    </div>
  )
}

export default About
