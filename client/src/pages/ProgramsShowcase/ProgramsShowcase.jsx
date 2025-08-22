// src/pages/ProgramsShowcase/ProgramsShowcase.jsx
import React, { useState } from 'react';
import './ProgramsShowcase.css';

const ProgramsShowcase = () => {
  const [activeProgram, setActiveProgram] = useState(0);

  const programs = [
    {
      name: 'SAHAYOG HASTA',
      description: 'Community support program connecting families in need with local volunteers. We provide immediate assistance for food, healthcare, and education while building long-term support networks in urban slums and rural villages.',
      icon: '🤝',
      color: '#2196F3'
    },
    {
      name: 'JEEVAN VRIKSHA', 
      description: 'Cultural healing program helping children reconnect with their roots through traditional storytelling, art, and music. Children learn resilience by understanding their family history and cultural strengths.',
      icon: '🌳',
      color: '#4CAF50'
    },
    {
      name: 'SHANTI SAINIK',
      description: 'Youth leadership program empowering young Indians to become community changemakers. Participants learn conflict resolution, public speaking, and social entrepreneurship skills.',
      icon: '🕊️',
      color: '#9C27B0'
    },
    {
      name: 'KAVERI PROGRAM',
      description: 'Comprehensive intervention for children affected by natural disasters, poverty, and family trauma. We use play therapy, group counseling, and family support services delivered by trained local social workers in Hindi and regional languages.',
      icon: '🌺',
      color: '#FF5722'
    }
  ];

  const nextProgram = () => {
    setActiveProgram((prev) => (prev + 1) % programs.length);
  };

  const prevProgram = () => {
    setActiveProgram((prev) => (prev - 1 + programs.length) % programs.length);
  };

  return (
    <div className="programs-showcase">
      {/* Left Side - Content */}
      <div className="left-section">
        <div className="content-container">
          <h1 className="main-title">
            PROGRAMS THAT <span className="highlight">BUILD</span><br />
            EMOTIONAL STRENGTH<br />
            AND COMMUNITY RESILIENCE
          </h1>
          
          <div className="programs-list">
            {programs.map((program, index) => (
              <div 
                key={index}
                className={`program-item ${index === activeProgram ? 'active' : ''}`}
                onClick={() => setActiveProgram(index)}
              >
                <div className="program-icon">
                  <span>{program.icon}</span>
                </div>
                <span className="program-name">{program.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Center Image - Fixed positioning */}
        <div className="center-image">
          <img 
            src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=450&fit=crop&crop=center"
            alt="Community service activities"
          />
        </div>
      </div>

      {/* Right Side - Program Details */}
      <div 
        className="right-section"
        style={{ backgroundColor: programs[activeProgram].color }}
      >
        <div className="program-details">
          <h2 className="program-title">
            {programs[activeProgram].name}
          </h2>
          
          <p className="program-description">
            {programs[activeProgram].description}
          </p>
          
          <div className="navigation">
            <button className="nav-btn" onClick={prevProgram}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
            
            <button className="nav-btn" onClick={nextProgram}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramsShowcase;
