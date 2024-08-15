import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login_screen/login';
import HomePage from './pages/chat_screen/Chat'; 
import AppRouter from './routes';

const App: React.FC = () => {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Login />} />
    //     <Route path="/home" element={<HomePage />} /> 
    //   </Routes>
    // </Router>
    <AppRouter/>
  );
};

export default App;
