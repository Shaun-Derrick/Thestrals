import React from "react"
import { Grid } from "semantic-ui-react"
import { Link } from "react-router-dom"

const GridExampleColumnCount = () => (
  <Grid>
    <Grid.Row columns={5}>
      <Grid.Column>
        <Link to="/debbie" id="AboutUsLink">
          <div id="DebbieprofilePicDiv"></div>
        </Link>
      </Grid.Column>

      <Grid.Column>
        <Link to="/danny" id="AboutUsLink">
          <div id="DannyprofilePicDiv"></div>
        </Link>
      </Grid.Column>
      <Grid.Column>
        <Link to="/kery" id="AboutUsLink">
          <div id="KeryprofilePicDiv"></div>
        </Link>
      </Grid.Column>

      <Grid.Column>
        <Link to="shaun" id="AboutUsLink">
          <div id="ShaunprofilePicDiv"></div>
        </Link>
      </Grid.Column>
      <Grid.Column>
        <Link to="sid">
          <div id="SidprofilePicDiv"></div>
        </Link>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={5} id="TeamMemName">
      <Grid.Column>
        <Link to="/debbie" id="AboutUsLink">
          <h2>Debbie Butt</h2>
        </Link>
      </Grid.Column>

      <Grid.Column>
        <Link to="/danny" id="AboutUsLink">
          <h2>Danny Nguyen</h2>
        </Link>
      </Grid.Column>

      <Grid.Column>
        <Link to="/kery" id="AboutUsLink">
          <h2>Kery Long</h2>
        </Link>
      </Grid.Column>
      <Grid.Column>
        <Link to="shaun" id="AboutUsLink">
          <h2>Shaun Derrick</h2>
        </Link>
      </Grid.Column>
      <Grid.Column>
        <Link to="sid">
          <h2>Siddharth(Sid) Chopra</h2>
        </Link>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={5}>
      <Grid.Column>
        <p id="aboutPara">PO & Administrator</p>
      </Grid.Column>
      <Grid.Column>
        <p id="aboutPara">developer</p>
      </Grid.Column>
      <Grid.Column>
        <p id="aboutPara">developer</p>
      </Grid.Column>
      <Grid.Column>
        <p id="aboutPara">developer</p>
      </Grid.Column>
      <Grid.Column>
        <p id="aboutPara">developer</p>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={5}>
      <Grid.Column>
        <p id="aboutPara">
          <a
            href="https://www.linkedin.com/in/debbie-butt-65040490/"
            target="_blank"
          >
            LinkedIn Profile
          </a>
        </p>
      </Grid.Column>
      <Grid.Column>
        <p id="aboutPara">
          <a
            href="https://www.linkedin.com/in/danny-nguyen-b8306b3a/"
            target="_blank"
          >
            LinkedIn Profile
          </a>
        </p>
      </Grid.Column>
      <Grid.Column>
        <p id="aboutPara">
          <a href="https://www.linkedin.com/in/kery-long" target="_blank">
            LinkedIn Profile
          </a>
        </p>
      </Grid.Column>
      <Grid.Column>
        <p id="aboutPara">
          <a
            href="https://www.linkedin.com/in/shaun-derrick-11642755/"
            target="_blank"
          >
            LinkedIn Profile
          </a>
        </p>
      </Grid.Column>
      <Grid.Column>
        <p id="aboutPara">
          <a href="https://www.linkedin.com/in/sidchopp/" target="_blank">
            LinkedIn Profile
          </a>
        </p>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleColumnCount
