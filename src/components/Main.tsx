import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={require("../assets/images/pp1.png")} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Siddhi61436" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/siddhi-jadhav123" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:siddhijadhav1216@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
          <h1>Siddhi Jadhav</h1>
          <p>Software Developer</p>
          <p className="bio">Hi, I'm Siddhi Jadhav 👋<br/>
A Software Developer specializing in Android & Full-Stack Web Development<br/>
Currently working at Ness Digital Engineering on LinkedIn's Android platform</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Siddhi61436" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/siddhi-jadhav123" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:siddhijadhav1216@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;