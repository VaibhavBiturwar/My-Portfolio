import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './Honors.css';

const Honors = () => {
  return (
    <section id="honors" className="honors-section">
      <div className="container">
        <h1 className="section-title">Honors & Awards</h1>
        <div className="honors-list">
          {portfolioData.achievements.map((honor, index) => (
            <div key={index} className="honor-card">
              <div className="honor-icon">🏆</div>
              <div className="honor-content">
                <h3 className="honor-title">{honor.title}</h3>
                <p className="honor-company">{honor.company}</p>
                <p className="honor-period">{honor.period}</p>
                <p className="honor-description">{honor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Honors;
