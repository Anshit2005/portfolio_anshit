import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <span>Developed by Anshit</span>
      </div>

      <div className="footer-center">
        <span>© 2025 Anshit Agarwal</span>
      </div>

      <div className="footer-right">
        <a
          href="https://github.com/Anshit2005"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/2005anshit/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:anshitagarwal1087@gmail.com"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/Anshit2005"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Portfolio"
        >
          <FaGlobe />
        </a>
      </div>
    </div>
  );
};

export default Footer;
