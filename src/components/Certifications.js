import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './Certifications.css';

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <h1 className="section-title">Certifications</h1>
        <div className="certifications-grid">
          {portfolioData.certifications.map((cert, index) => (
            <div key={index} className="cert-card">
              <img
                src={`${process.env.PUBLIC_URL}${cert.image}`}
                className="cert-image"
                alt={cert.title}
                onError={(e) => {
                  e.target.src = `${process.env.PUBLIC_URL}/images/logo.png`;
                }}
              />
              <div className="cert-body">
                <h5 className="cert-title">{cert.title}</h5>
                <p className="cert-text">
                  {cert.instructor ? `Instructor: ${cert.instructor}` : `Coordinator: ${cert.coordinator}`}
                </p>
                <small className="cert-platform">{cert.platform}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
