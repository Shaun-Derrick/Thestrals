
import React from 'react'
import { Grid,  } from 'semantic-ui-react'
import {Link} from 'react-router-dom';

const GridExampleColumnCount = () => (
  <Grid>
    <Grid.Row columns={5}>
      <Grid.Column>
      <Link to="/danny" id="AboutUsLink"><div id="DannyprofilePicDiv"></div></Link>
      </Grid.Column>
      <Grid.Column>
      <Link to="/debbie" id="AboutUsLink"><div id="DebbieprofilePicDiv"></div></Link>
      </Grid.Column>
      <Grid.Column>
      <Link to="/kery" id="AboutUsLink"><div id="KeryprofilePicDiv"></div></Link>
      </Grid.Column>
            
      <Grid.Column >
      <Link to="shaun" id="AboutUsLink"><div id="ShaunprofilePicDiv"></div></Link>
      </Grid.Column>
      <Grid.Column>
      <Link to="sid"><div id="SidprofilePicDiv"></div></Link>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={5} id="TeamMemName">
      <Grid.Column>
        <Link to="/danny" id="AboutUsLink"><h2>Danny Nguyen</h2></Link>
      </Grid.Column>
      <Grid.Column>
        <Link to="/debbie" id="AboutUsLink"><h2>Debbie Butt</h2></Link>
      </Grid.Column>
      <Grid.Column>
        <Link to="/kery" id="AboutUsLink"><h2>Kery Long</h2></Link>
      </Grid.Column>
      <Grid.Column>
        <Link to="shaun" id="AboutUsLink"><h2>Shaun Derrick</h2></Link>
      </Grid.Column>
      <Grid.Column>
        <Link to="sid"><h2>Siddharth(Sid) Chopra</h2></Link> 
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={5}>
      <Grid.Column>
        <p>developer</p>
      </Grid.Column>
      <Grid.Column>
        <p>PO & Administrator</p>
      </Grid.Column>
      <Grid.Column>
      <p>developer</p>
      </Grid.Column>
      <Grid.Column>
      <p>developer</p>
      </Grid.Column>
      <Grid.Column>
      <p>developer</p>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={5}>
      <Grid.Column>
        <p><a href="https://www.linkedin.com/in/danny-nguyen-b8306b3a/">LinkedIn Profile</a></p>
      </Grid.Column>
      <Grid.Column>
        <p>< a href="https://www.linkedin.com/in/debbie-butt-65040490/">LinkedIn Profile</a></p>
      </Grid.Column>
      <Grid.Column>
      <p><a href="https://www.linkedin.com/in/kery-long">LinkedIn Profile</a></p>
      </Grid.Column>
      <Grid.Column>
      <p><a href="https://www.linkedin.com/in/shaun-derrick-11642755/">LinkedIn Profile</a></p>
      </Grid.Column>
      <Grid.Column>
      <p><a href ="https://www.linkedin.com/in/sidchopp/">LinkedIn Profile</a></p>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleColumnCount// import React from 'react'
// import { Grid, Image } from 'semantic-ui-react'

// const TeamMemberGrid = () => (
//   <div>
//     <Grid>
//       <Grid.Column mobile={16} tablet={8} computer={3}>
//       <div id="DannyprofilePicDiv"></div>
          
          
//       </Grid.Column>
//       <Grid.Column mobile={16} tablet={8} computer={3}>
//       <div id="DebbieprofilePicDiv"></div>
//       </Grid.Column>
//       <Grid.Column mobile={16} tablet={8} computer={3}>
//         <div id="KeryprofilePicDiv"></div>
//       </Grid.Column>
//       <Grid.Column mobile={16} tablet={8} computer={3}>
//       <div id="ShaunprofilePicDiv"></div>
//       </Grid.Column>
//       <Grid.Column mobile={16} tablet={8} computer={3}>
//       <div id="SidprofilePicDiv"></div>
//       </Grid.Column>
//     </Grid>

//     <Grid id ="TeamMemName">
//       <Grid.Column largeScreen={2} widescreen={1}computer={3}>
//       <h2>Danny Nguyen</h2>
//       </Grid.Column>
//       <Grid.Column largeScreen={2} widescreen={1}computer={3}>
//         <h2>Debbie Butt</h2>
//       </Grid.Column>
//       <Grid.Column largeScreen={2} widescreen={1}computer={3}>
//         <h2>Kery Long</h2>
//       </Grid.Column>
//       <Grid.Column largeScreen={2} widescreen={1}computer={3}>
//         <h2>Shaun Derrick</h2>
//       </Grid.Column>
//       <Grid.Column largeScreen={2} widescreen={1}computer={3}>
//         <h2>Siddharth(Sid) Chpopra</h2>
//       </Grid.Column>
//       </Grid>

//     <Grid>
//       <Grid.Column largeScreen={2} widescreen={1}>
//       <p>Developer</p>
//       </Grid.Column>
//       <Grid.Column largeScreen={2} widescreen={1}>
//         <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
//       </Grid.Column>
//       <Grid.Column largeScreen={2} widescreen={1}>
//         <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
//       </Grid.Column>
//       <Grid.Column largeScreen={2} widescreen={1}>
//         <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
//       </Grid.Column>
//     </Grid>
//     </div>
 
// )

// export default TeamMemberGrid