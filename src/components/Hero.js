import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './Hero.css';

const Hero = () => {
  const handleResumeClick = () => {
    const publicUrl = process.env.PUBLIC_URL || '';
    const resumePath = `${publicUrl}/Resume/VaibhavBiturwar_resume.pdf`;
    window.open(resumePath, '_blank');
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting">Hello, I'm</div>
            <h1 className="hero-name">{portfolioData.personal.name}</h1>
            <h2 className="hero-title">
              <span className="gradient-text">{portfolioData.personal.title}</span>
            </h2>
            <p className="hero-description">{portfolioData.personal.summary}</p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={handleResumeClick}>
                <span>View Resume</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <a href="#projects" className="btn btn-secondary">
                <span>View Projects</span>
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">4+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat">
                <div className="stat-number">10+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Connections</div>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <img 
                src={`${process.env.PUBLIC_URL}/images/emoji1.png`} 
                alt="Vaibhav Biturwar" 
                className="hero-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
