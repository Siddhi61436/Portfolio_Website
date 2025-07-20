import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Siddhi61436" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/siddhi-jadhav123" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="mailto:siddhijadhav1216@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
      </div>
      <p>A portfolio of <a href="https://github.com/vshriram26/Shriram-Deshmukh-Portfolio" target="_blank" rel="noreferrer">Siddhi Jadhav</a> with 💪🧠</p>
    </footer>
  );
}

export default Footer;