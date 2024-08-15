import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import HomePage from './pages/success_login'; 

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} /> 
      </Routes>
    </Router>
  );
};

export default App;
