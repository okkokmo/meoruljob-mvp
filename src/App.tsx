import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ProfileConfirmPage } from './pages/ProfileConfirmPage';
import { JobsPage } from './pages/JobsPage';
import { SimulationPage } from './pages/SimulationPage';
import { ActionPlanPage } from './pages/ActionPlanPage';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile-confirm" element={<ProfileConfirmPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/simulation/:jobId" element={<SimulationPage />} />
          <Route path="/action-plan/:jobId" element={<ActionPlanPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
