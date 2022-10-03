import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import './Footer.css';

const Footer = () => (
  <Grid className="footer" divided='vertically'>

<Grid.Row columns={3}>
      <Grid.Column>
      <h2>Explore</h2>
      <h4>Home</h4>
      <h4>Questions</h4>
      <h4>Articles</h4>
      <h4>Tutorials</h4>
      </Grid.Column>
      <Grid.Column>
      <h2>Support</h2>
      <h4>FAQs</h4>
      <h4>Help</h4>
      <h4>Contact Us</h4>
      <br></br>
      <br></br>
      </Grid.Column>
      <Grid.Column>
      <h2>Stay connected</h2>
      <img className="fb" src="https://www.carloalberto.org/wp-content/uploads/2021/03/facebook-logo-1.png"></img>
      <img className="twitter" src="https://www.carloalberto.org/wp-content/uploads/2021/03/twitter-icon.png"></img>
      <img className="insta" src="https://www.carloalberto.org/wp-content/uploads/2021/03/instagram-logo.png"></img>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </Grid.Column>
    </Grid.Row>
    <Grid.Column>
      <h2 className="devdeakin">DEV@Deakin 2022</h2>
    </Grid.Column>
    <Grid.Row columns={5}>
    <Grid.Column>
      <br></br>
      </Grid.Column>
      <Grid.Column>
      <h4 className="bottomfooter">Privacy Policy</h4>
      </Grid.Column>
      <Grid.Column>
      <h4 className="bottomfooter">Terms</h4>
      </Grid.Column>
      <Grid.Column>
      <h4 className="bottomfooter">Code of Conduct</h4>
      </Grid.Column>
      <Grid.Column>
      <br></br>
      </Grid.Column>
    </Grid.Row>


  </Grid>
)

export default Footer