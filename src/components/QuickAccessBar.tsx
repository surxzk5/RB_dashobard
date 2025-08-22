import React from 'react';
import './QuickAccessBar.css';

const QuickAccessBar: React.FC = () => {
  const handleNavClick = (item: string) => {
    console.log(`Clicked on: ${item}`);
    // Future: Add routing logic here
  };

  return (
    <nav className="quick-access-bar">
      <div className="nav-container">
        <div className="nav-item" onClick={() => handleNavClick('Dashboard')}>
          Dashboard
        </div>
        <div className="nav-item" onClick={() => handleNavClick('Calendar')}>
          Calendar
        </div>
        <div className="nav-item" onClick={() => handleNavClick('Trains')}>
          Release Trains
        </div>
        <div className="nav-item" onClick={() => handleNavClick('Integrations')}>
          Integrations
        </div>
        <div className="nav-item" onClick={() => handleNavClick('Settings')}>
          Settings
        </div>
      </div>
    </nav>
  );
};

export default QuickAccessBar; 