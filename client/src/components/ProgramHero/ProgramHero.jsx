// src/components/ProgramHero/ProgramHero.jsx
import React, { memo } from 'react';
import ActivitySidebar from '../ActivitySidebar/ActivitySidebar';
import './ProgramHero.css';

const ProgramHero = memo(({ programsData, activeProgram, onProgramChange, currentProgram }) => {
  return (
    <section className="program-hero">
      <div className="hero-content">
        <div className="hero-left">
          <h1 className="hero-title">
            ACTIVITIES THAT <span className="highlight">DEVELOP</span> EMOTIONAL
            <br />REGULATION AND RESILIENCE
          </h1>
          
          <ActivitySidebar 
            programs={programsData}
            activeProgram={activeProgram}
            onProgramChange={onProgramChange}
          />
        </div>
        
        <div className="hero-right">
          <div className="hero-image-container">
            <img
                src="https://picsum.photos/500/400?random=1"
                alt={`${currentProgram.title} activities`}
                className="hero-image"
                loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

ProgramHero.displayName = 'ProgramHero';
export default ProgramHero;
