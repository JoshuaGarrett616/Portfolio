import React, { useState} from 'react';
import { IonPage, IonButton, IonModal, IonContent,
         IonHeader, IonToolbar, IonTitle, IonIcon} from '@ionic/react';
import {Grid, Cell} from 'react-mdl';
import DownloadLink from "react-download-link";
import { logoGithub, logoGoogle } from 'ionicons/icons';

const Tab3: React.FC = () => {
  const [showP1, setShowP1] = useState(false);
  const [showP2, setShowP2] = useState(false);
  const [showP3, setShowP3] = useState(false);
  const [showP4, setShowP4] = useState(false);
  const [showP5, setShowP5] = useState(false);
  const [showP6, setShowP6] = useState(false);


  return (
    <IonPage>
  			<div className= "landing-div"style = {{width: '100%',height: '100%',margin: 'auto'}}>
          <Grid className = "landing-grid">
            <Cell col ={12}>
              <div className="banner-text">
                <h1>Check Out My Projects!</h1>
              </div>

              <p></p>
              <div className="banner-text">
                <IonButton fill="clear" expand="block" onClick={() => setShowP1(true)}>
                  A.S.H (First Person Shooter)
                </IonButton>
              </div>

              <p></p>
              <div className="banner-text">
                <IonButton fill="clear" expand="block" onClick={() => setShowP2(true)}>
                  Apollo's Caliber Zero (Space Bullet Hell)
                </IonButton>
              </div>

              <p></p>
              <div className="banner-text">
                <IonButton fill="clear" expand="block" onClick={() => setShowP3(true)}>
                  Testing Virtual Economies (Research Project)
                </IonButton>
              </div>

              <p></p>
              <div className="banner-text">
                <IonButton fill="clear" expand="block" onClick={() => setShowP4(true)}>
                  Shop Floor Communication (Manufacturing Project)
                </IonButton>
              </div>

              <p></p>
              <div className="banner-text">
                <IonButton fill="clear" expand="block" onClick={() => setShowP5(true)}>
                  Midi_Midi (Digital Audio Workstation)
                </IonButton>
              </div>

              <p></p>
              <div className="banner-text">
                <IonButton fill="clear" expand="block" onClick={() => setShowP6(true)}>
                  This Website!
                </IonButton>
              </div>
            </Cell>
          </Grid>
        </div>

      <IonModal isOpen={showP1}
        cssClass="primary"
	      swipeToClose={true}
	      onDidDismiss={() => setShowP1(false)}>
        <IonContent>
          <IonHeader>
            <IonToolbar color = "primary">
              <IonTitle>A.S.H</IonTitle>
            </IonToolbar>
          </IonHeader>
          <p>A first person shooter survival horror game made for my Game Programming 2 class in the 
          Unreal Engine. In this game you play as an android named A.S.H (Afterlife Synthetic Human), 
          who is tasked with saving humanity from the Rapture. To do this, you have to fight
          your way through the Garden of Eden and uncover the secret of the Rapture.
          This game follows an old school RE1 style of gameplay and is filled with puzzles
          given in the form of scripture-like riddles for the player to solve.</p>
          <p>You can check it out here! <a href="https://drive.google.com/drive/folders/1OxykX7UhgbuOHznznziDwhc9ekKIIB1G?usp=sharing" rel="noopener noreferrer" 
          target="_blank"> <IonIcon size="medium" icon={logoGoogle}/></a></p>
        </IonContent>
        <IonButton onClick={() => setShowP1(false)}>Leave</IonButton>
      </IonModal>

      <IonModal isOpen={showP2}
        cssClass="primary"
	      swipeToClose={true}
	      onDidDismiss={() => setShowP2(false)}>
        <IonContent>
          <IonHeader>
            <IonToolbar color = "primary">
              <IonTitle>Apollo's Caliber Zero</IonTitle>
            </IonToolbar>
          </IonHeader>
          <p>An old school style space bullet hell made in Dr. Parberry's L.A.R.C Engine for my Game Programming
          class. A pirate crew appropariately named, "The Plague" has been going around the galaxy and stealing
          the sun's energy of each solar system they visit, effectively killing all living things in said solar system
          once they are done. They have finally arrived at your solar system and it is your job to defeat them and
          protect your home.</p>
          <p>You can check it out here! <a href="https://drive.google.com/file/d/1L89VGYkqturtOb4DCOeSlN3lcgehbGoN/view?usp=sharing" rel="noopener noreferrer" 
          target="_blank"> <IonIcon size="medium" icon={logoGoogle}/></a></p>
        </IonContent>
        <IonButton onClick={() => setShowP2(false)}>Leave</IonButton>
      </IonModal>

      <IonModal isOpen={showP3}
        cssClass="primary"
	      swipeToClose={true}
	      onDidDismiss={() => setShowP3(false)}>
        <IonContent>
          <IonHeader>
            <IonToolbar color = "primary">
              <IonTitle>Testing Virtual Economies</IonTitle>
            </IonToolbar>
          </IonHeader>
          <p>Created a research project in Unreal meant for testing different types of virtual economies. Works by having a 
          player explore a world filled with items randomly given ratings from 1 to 5 (1 being poor quality and 5 rare) and 
          having them buy and sell said items on an AI driven market with different rules applying depending on the economy 
          that is being tested.</p>
          <p>You can check it out here! <a href="https://drive.google.com/file/d/1dHG8bHXD6k6RdJwCB7HPGZJDH23oEeeQ/view?usp=sharing" rel="noopener noreferrer" 
          target="_blank"> <IonIcon size="medium" icon={logoGoogle}/></a></p>
        </IonContent>
        <IonButton onClick={() => setShowP3(false)}>Leave</IonButton>
      </IonModal>

      <IonModal isOpen={showP4}
        cssClass="primary"
	      swipeToClose={true}
	      onDidDismiss={() => setShowP4(false)}>
        <IonContent>
          <IonHeader>
            <IonToolbar color = "primary">
              <IonTitle>Shop floor communication</IonTitle>
            </IonToolbar>
          </IonHeader>
          <p>Project that I lead for PBC Linear that implements a way for shop floor employees to instantly contact a department 
          they need with a flip of a switch. If the switch is not flipped off in a certain amount of time, it will call up the 
          chain of command until the CEO is reached, the amount of time that the switch was on is then recorded and pushed to a 
          database. Switches were attached to a Raspberry Pi which included a camera that streams video of the station to a pin 
          protected web app I created where live data about each station can be viewed. Created with Python, Bash, C, and Javascript React.</p>
          <p>The communication is done with gpio-watch, C code that listens for a switch's change in output and runs a bash script which runs a python script
          that uses the Twilio API to call a specified person in the database. As long as the script is running it will escelate. Once the
          the python script is terminated with another flip of the switch, the bash script will record the runtime of the script and send that time to a database.</p>
          <p>You can check out the site code here! <a href="https://github.com/JoshuaGarrett616/cobot-monitoring" rel="noopener noreferrer" 
          target="_blank"> <IonIcon size="medium" icon={logoGithub}/></a></p>
        </IonContent>
        <IonButton onClick={() => setShowP4(false)}>Leave</IonButton>
      </IonModal>

      <IonModal isOpen={showP5}
        cssClass="primary"
	      swipeToClose={true}
	      onDidDismiss={() => setShowP5(false)}>
        <IonContent>
          <IonHeader>
            <IonToolbar color = "primary">
              <IonTitle>Midi_Midi</IonTitle>
            </IonToolbar>
          </IonHeader>
          <p>A digital audio workstation that I created with a small team in the QT Framework. Lead the UI portion of the project which gave me experience 
          in CSS and XML. The group setting portion of the project gave me experience in code documentation techniques, UML diagram design, and the agile workflow.</p>
          <p>You can check out the code here! <a href="https://github.com/azulflame/Midi_Midi" rel="noopener noreferrer" 
          target="_blank"> <IonIcon size="medium" icon={logoGithub}/></a></p>
        </IonContent>
        <IonButton onClick={() => setShowP5(false)}>Leave</IonButton>
      </IonModal>

      <IonModal isOpen={showP6}
        cssClass="primary"
	      swipeToClose={true}
	      onDidDismiss={() => setShowP6(false)}>
        <IonContent>
          <IonHeader>
            <IonToolbar color = "primary">
              <IonTitle>This Website</IonTitle>
            </IonToolbar>
          </IonHeader>
          <p>I created my website using Javascript React with the Ionic Framework and it is being hosted with Github Pages. If you happen to be on a desktop, check it out on a phone too!</p>
          <p>You can check out the code here! <a href="https://github.com/JoshuaGarrett616/Portfolio" rel="noopener noreferrer" 
          target="_blank"> <IonIcon size="medium" icon={logoGithub}/></a></p>
        </IonContent>
        <IonButton onClick={() => setShowP6(false)}>Leave</IonButton>
      </IonModal>

    </IonPage>
  );
};

export default Tab3;
