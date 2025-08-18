import React from "react";
import "./Footer.css";
import { FaLinkedin, FaWhatsapp, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <h3>Connect me on</h3>
      <div className="foot">
      
      <div className="footer-socials">
        
        <a
          href="https://www.linkedin.com/in/susmitha-pottipogu-b7256428b/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="social-icon" />
        </a>
        <a
          href="https://wa.me/7386619878"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp className="social-icon" />
        </a>
        <a
          href="https://github.com/susmitha712"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="social-icon" />
        </a>
        <a href="mailto:susmithapottipogu2005@gmail.com">
          <FaEnvelope className="social-icon" />
        </a>
      </div>
      
      <ul className="footer-links">
        
        <div>
        
        <li><a href="#home">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#learnings">Learnings</a></li>
        </div>
        <div>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#Education">Education</a></li>
        <li><a href="#certificates">Certificates</a></li>
        </div>
      </ul>
</div>
<div className="footcopy">
  <div>
      <p className="footer-copy" style={{paddingTop:"30px"}}>
        © {new Date().getFullYear()} Your Name. All Rights Reserved.
      </p>
      </div>
      <div>
        <p style={{paddingLeft:"500px",paddingTop:"30px"}}>
          Made by Susmitha❤️
        </p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
