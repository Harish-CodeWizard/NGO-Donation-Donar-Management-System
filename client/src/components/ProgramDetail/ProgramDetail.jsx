// src/components/ProgramDetail/ProgramDetail.jsx
import React, { memo } from 'react';
import NavigationArrows from '../NavigationArrows/NavigationArrows';
import './ProgramDetail.css';

const ProgramDetail = memo(({ program, onNext, onPrev }) => {
  return (
    <section className="program-detail" style={{ backgroundColor: program.color }}>
      <div className="detail-container">
        <div className="detail-content">
          <h2 className="program-title">{program.title}</h2>
          <p className="program-description">{program.description}</p>
        </div>
        
        <NavigationArrows onNext={onNext} onPrev={onPrev} />
      </div>
    </section>
  );
});

ProgramDetail.displayName = 'ProgramDetail';
export default ProgramDetail;
