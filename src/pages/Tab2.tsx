import React from 'react';
import { IonIcon, IonPage } from '@ionic/react';
import './Tabs.css';
import {Grid, Cell} from 'react-mdl';
import { logoGithub, logoLinkedin } from 'ionicons/icons';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <div className= "landing-div"style = {{width: '100%',height: '100%',margin: 'auto'}}>
        <Grid className = "landing-grid">
            <Cell col ={12}>
              <div className="banner-text-res">
                <h1> Job Experience</h1>
                <hr/>
                <p style = {{margin: 3, padding: 0}}>Robotics/IT Intern at PBC Linear</p>
                <p style = {{margin: 3, padding: 0}}>Roscoe, IL (May 2020-Present)</p>
                <p style = {{margin: 3, padding: 0}}> 
                  Worked in the research and development area of a manufacturing company, 
                  helped with automizing the shop floor and collecting data about said 
                  automatization techniques.
                </p>
                <hr/>
                <p style = {{margin: 3, padding: 0}}>Resident Assistant at University of North Texas</p>
                <p style = {{margin: 3, padding: 0}}>Denton, TX (Jan 2018-May 2020)</p>
                <p style = {{margin: 3, padding: 0}}> 
                  Held a position as an RA at 3 different halls where I helped residents 
                  with needs and assisted with managing the hall.
                </p>
                <hr/>
                <p style = {{margin: 3, padding: 0}}>Team Member at Regal Live Oak Theater</p>
                <p style = {{margin: 3, padding: 0}}>Live Oak, TX (Feb 2016-Aug 2016)</p>
                <p style = {{margin: 3, padding: 0}}> 
                  Held a position as a team member where I tended to customer's needs.
                </p>
              </div>

              <p></p>
              <div className="banner-text-res">
                <h1> Education</h1>
                <hr/>
                <p style = {{margin: 3, padding: 0}}> University of North Texas</p>
                <p style = {{margin: 3, padding: 0}}> Computer Science Undergraduate (2016-2020)</p>
                <hr/>
                <p style = {{margin: 3, padding: 0}}> Important classes</p>
                <p style = {{margin: 3, padding: 0}}> Game Programming (CSCE 4220): 
                Exploration into techniques in game programming.</p>
                <p style = {{margin: 3, padding: 0}}> Programming Languages (CSCE 4460): 
                Syntax, semantic, and computation models of programming languages.</p>
                <p style = {{margin: 3, padding: 0}}> System Programming (CSCE 3600): 
                 Intro to design and operation of system software.</p>
                <p style = {{margin: 3, padding: 0}}> Software Capstone (CSCE 4901): 
                  Developing a complex piece of software in alignment with a customer's requirements.</p>
              </div>

              <p></p>
              <div className="social-link">
                <h1> Contact & Socials</h1>
                <hr style = {{width: '100%'}}/>
                <p style = {{margin: 3, padding: 0}}> Email: JoshuaGarrett616@gmail.com</p>
                <hr style = {{width: '100%'}}/>
                <a href="https://www.linkedin.com/in/joshuaegarrett/" rel="noopener noreferrer" target="_blank">
                  <IonIcon size="large" icon={logoLinkedin}/>
                </a>
                <hr style = {{width: '100%'}}/>
                <a href="https://github.com/JoshuaGarrett616" rel="noopener noreferrer" target="_blank">
                  <IonIcon size="large" icon={logoGithub}/>
                </a>
              </div>
            </Cell>
          </Grid>
      </div>
    </IonPage>
  );
};

export default Tab2;
