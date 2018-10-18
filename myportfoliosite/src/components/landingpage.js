import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
class Landing extends Component {
  render(){
    return(
      <div style={{width:'100%', margin: 'auto'}}>
          <Grid className="landing-grid">
            <Cell col={12}>
              <img
                src="assets/bitmoji.png"
                alt="avatar"
                className="avatar-img"
              />
              <div className="banner-text">
                <h1>Full Stack Software Enginnering Intern</h1>
                <h2>Computer Science and Engineering</h2>
                <h3>University of California, Irvine</h3>
                <hr/>
                <p>React | Bootstrap | NodeJS | C/C++ | Java | Python | SystemVerilog | Assembly | R</p>
                <div className="social-links">
                    {/* linkedin */}
                    <a href="https://www.linkedin.com/in/devin-patel/"  rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-linkedin-square" aria-hidden="true" />
                    </a>

                    {/* Github */}
                    <a href="https://github.com/devinpatell"  rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-github-square" aria-hidden="true" />
                    </a>

                    {/* Facebook */}
                    <a href="https://www.facebook.com/devin.patel.1650"  rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-facebook-square" aria-hidden="true" />
                    </a>
                </div>
              </div>
            </Cell>
          </Grid>
      </div>
    )
  }
}

export default Landing;
