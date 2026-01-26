import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import './Experience.css';

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpanded = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h1 className="section-title">Experience</h1>
        <div className="experience-list">
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header" onClick={() => toggleExpanded(index)}>
                <div className="experience-content">
                  <span className="experience-title">{exp.title}</span>
                  <span className="experience-location">{exp.company}, {exp.location}</span>
                  <span className="experience-time">{exp.period}</span>
                </div>
                <span className="experience-toggle">
                  {expandedIndex === index ? '−' : '+'}
                </span>
              </div>
              {expandedIndex === index && exp.description && exp.description.length > 0 && (
                <div className="experience-details">
                  <ul className="experience-description-list">
                    {exp.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
