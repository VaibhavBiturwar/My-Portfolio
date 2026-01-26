import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './Recommendations.css';

const Recommendations = () => {
  return (
    <section id="recommendations" className="recommendations-section">
      <div className="container">
        <h1 className="section-title">Recommendations</h1>
        <div className="recommendations-list">
          {portfolioData.recommendations.map((rec, index) => (
            <div key={index} className="recommendation-card">
              <div className="recommendation-header">
                <div className="recommendation-avatar">
                  {rec.name.charAt(0)}
                </div>
                <div className="recommendation-info">
                  <h3 className="recommendation-name">{rec.name}</h3>
                  <p className="recommendation-title">{rec.title}</p>
                  <p className="recommendation-meta">
                    {rec.connection} • {rec.relationship} • {rec.date}
                  </p>
                </div>
              </div>
              <div className="recommendation-text">
                <p>"{rec.text}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
