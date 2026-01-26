import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    { title: "Frontend", skills: portfolioData.skills.frontend, icon: "💻" },
    { title: "Backend", skills: portfolioData.skills.backend, icon: "⚙️" },
    { title: "Database", skills: portfolioData.skills.database, icon: "🗄️" },
    { title: "Mobile", skills: portfolioData.skills.mobile, icon: "📱" },
    { title: "Tools", skills: portfolioData.skills.tools, icon: "🛠️" },
    { title: "Other", skills: portfolioData.skills.other, icon: "✨" }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h1 className="section-title">Skills & Technologies</h1>
        <div className="skills-container">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="skill-category-card">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
