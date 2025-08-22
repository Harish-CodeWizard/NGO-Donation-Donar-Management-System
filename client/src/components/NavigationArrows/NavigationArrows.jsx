// src/components/NavigationArrows/NavigationArrows.jsx
import React, { memo } from 'react';
import './NavigationArrows.css';

const NavigationArrows = memo(({ onNext, onPrev }) => {
  return (
    <div className="navigation-arrows">
      <button 
        className="nav-arrow prev-arrow"
        onClick={onPrev}
        aria-label="Previous program"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      <button 
        className="nav-arrow next-arrow"
        onClick={onNext}
        aria-label="Next program"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
});

NavigationArrows.displayName = 'NavigationArrows';
export default NavigationArrows;
