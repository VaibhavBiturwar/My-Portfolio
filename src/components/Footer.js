import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <h2 className="footer-title">About This Website</h2>
      <p>Built with React and modern CSS</p>
      <h5>SOCIAL</h5>
      <div className="social-links">
        <a
          href={portfolioData.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <img className="social-image" src={`${process.env.PUBLIC_URL}/images/Social/linkedin.png`} alt="LinkedIn" />
        </a>
        <a
          href={portfolioData.social.github}
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <img className="social-image" src={`${process.env.PUBLIC_URL}/images/Social/github.png`} alt="GitHub" />
        </a>
        <a
          href={portfolioData.social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
        >
          <img className="social-image" src={`${process.env.PUBLIC_URL}/images/Social/twitter.png`} alt="Twitter" />
        </a>
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.social.email}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Send Email"
        >
          <img className="social-image" src={`${process.env.PUBLIC_URL}/images/Social/mail.png`} alt="Email" />
        </a>
      </div>
      <p className="suggestion">Feel free to drop any suggestions.</p>
      <h6 className="copyright">© {new Date().getFullYear()} Vaibhav Biturwar. All rights reserved.</h6>
    </footer>
  );
};

export default Footer;
