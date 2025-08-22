import React from 'react';
import QuickAccessBar from './components/QuickAccessBar';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <QuickAccessBar />
      <div className="dashboard-content">
        <h1 className="dashboard-title">Release Butler</h1>
      </div>
    </div>
  );
};

export default App; 