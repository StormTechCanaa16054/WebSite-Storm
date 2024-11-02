// src/App.tsx
import React from 'react';
import Team from './components/Team';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <Team />
    </div>
  );
};

export default App;
