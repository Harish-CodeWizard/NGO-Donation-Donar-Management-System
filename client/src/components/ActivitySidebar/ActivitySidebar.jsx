// src/components/ActivitySidebar/ActivitySidebar.jsx
import React, { memo } from 'react';
import './ActivitySidebar.css';

const ActivitySidebar = memo(({ programs, activeProgram, onProgramChange }) => {
  const getIconForProgram = (programId) => {
    const icons = {
      helpingHands: '🤝',
      treeOfLife: '🌳', 
      peaceBuilders: '🕊️',
      jacaranda: '🌺'
    };
    return icons[programId] || '🎯';
  };

  return (
    <div className="activity-sidebar">
      {Object.entries(programs).map(([key, program]) => (
        <div 
          key={key}
          className={`activity-item ${activeProgram === key ? 'active' : ''}`}
          onClick={() => onProgramChange(key)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              onProgramChange(key);
            }
          }}
        >
          <div className="activity-icon">
            <span className="icon-emoji">{getIconForProgram(key)}</span>
          </div>
          <span className="activity-name">{program.title}</span>
        </div>
      ))}
    </div>
  );
});

ActivitySidebar.displayName = 'ActivitySidebar';
export default ActivitySidebar;
