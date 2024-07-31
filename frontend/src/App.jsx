// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserLayout from './UserLayout';
import Home from './pages/Home/Home';
import Login from "./pages/Login/Login";

const App = () => {
  return (
    <Router>
      
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
          
        </Routes>
    
    </Router>
  );
};

export default App;
