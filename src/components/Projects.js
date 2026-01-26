import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import './Projects.css';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h1 className="section-title">Featured Projects</h1>
        <p className="section-subtitle">A collection of my recent work and contributions</p>
        <div className="projects-list">
          {portfolioData.projects.map((project) => (
            <div 
              key={project.id} 
              className={`project-card ${expandedProject === project.id ? 'expanded' : ''}`}
              aria-expanded={expandedProject === project.id}
            >
              <div className="project-card-inner">
                <div 
                  className="project-header"
                  onClick={() => toggleProject(project.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleProject(project.id);
                    }
                  }}
                  aria-label={expandedProject === project.id ? 'Collapse project' : 'Expand project'}
                >
                  <div className="project-title-section">
                    <h3 className="project-name">{project.name}</h3>
                    <span className="project-platform">{project.platform}</span>
                  </div>
                  <div className="project-toggle-btn">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      {expandedProject === project.id ? (
                        <path d="M18 15L12 9L6 15" strokeLinecap="round" strokeLinejoin="round" />
                      ) : (
                        <path d="M6 9L12 15L18 9" strokeLinecap="round" strokeLinejoin="round" />
                      )}
                    </svg>
                  </div>
                </div>

                {expandedProject === project.id && (
                  <div className="project-content">
                    <div className="project-skills-tags">
                      {project.skills.map((skill, idx) => (
                        <span key={idx} className="skill-tag">{skill}</span>
                      ))}
                    </div>

                    <div className="project-description">
                      <p>{project.description}</p>
                    </div>

                    {project.achievements && project.achievements.length > 0 && (
                      <div className="project-achievements">
                        <h4 className="achievements-title">Key Achievements</h4>
                        <ul className="achievements-list">
                          {project.achievements.map((achievement, idx) => (
                            <li key={idx}>
                              <span className="achievement-icon">✓</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.video && (
                      <div className="project-video">
                        <iframe
                          src={project.video}
                          title={project.name}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    )}

                    <div className="project-links">
                      {project.links && project.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`project-link-btn ${link.type || 'primary'}`}
                        >
                          <span>{link.text}</span>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
