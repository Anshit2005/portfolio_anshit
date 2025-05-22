import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-left'>
        <span>Developed by Anshit</span>
      </div>

      <div className='footer-center'>
        <span>Copyright © 2025 AA</span>
      </div>

      <div className='footer-right'>
        <a href="https://github.com/Anshit2005" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/2005anshit/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:anshitagarwal1087@gmail.com">
          <FaEnvelope />
        </a>
        <a href="https://github.com/Anshit2005" target="_blank" rel="noopener noreferrer">
          <FaGlobe />
        </a>
      </div>
    </div>
  );
};

export default Footer;
