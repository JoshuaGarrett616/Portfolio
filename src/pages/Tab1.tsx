import React from 'react';
import {Grid, Cell} from 'react-mdl';
import { IonPage } from '@ionic/react';
import './Tabs.css';
import Face from '../MyFace.jpg';

const Tab1: React.FC = () => {
  return (
    <IonPage>
  			<div className= "landing-div"style = {{width: '100%',height: '100%',margin: 'auto'}}>
          <Grid className = "landing-grid">
            <Cell col ={12}>
              <img src={Face} className="avatar-img"/>
              <div className="banner-text">
                <h1> Software & Web Developer</h1>
                <hr/>
                <p style = {{margin: 0, padding: 0}}> 
                    Unreal Engine | Unity | Qt | React | SVN/Git 
                </p>
                <p style = {{margin: 0, padding: 0}}> 
                    C++/C | C# | Python | Bash | Javascript
                </p>
                <hr/>
                <p style = {{margin: 0, padding: 0}}>
                  Hello! My name is Joshua Garrett, a Software Engineer based in Dallas, Texas with a focus 
                  in game development. Searching for an opportunity to apply my skills on an exciting software/web
                  project with an equally exciting team.
                </p>
              </div>
            </Cell>
          </Grid>
        </div>
    </IonPage>
  );
};

export default Tab1;
