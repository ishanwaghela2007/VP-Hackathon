// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserLayout from './components/UserLayout';

const App = () => {
  return (
    <Router>
      <UserLayout>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> */}
        </Routes>
      </UserLayout>
    </Router>
  );
};

export default App;
