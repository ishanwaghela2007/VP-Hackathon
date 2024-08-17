// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import UserLayout from './UserLayout';
import Home from './pages/Home/Home';
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";
import Error from './pages/Error/Error';
import FAQ from './pages/Help/FAQ';
import CommunityPage from './pages/community/Community';
import UserLayout from './UserLayout';
import Tutorial from './pages/Tutorial/Tutorial';

const App = () => {
  return (
    <Router>
      
        <Routes>
          <Route path='/' element={<UserLayout/>} />
         <Route index element={<Home/>} />
         <Route path="*" element={<Error />} />
         <Route path="login" element={<Auth />} />
         <Route path="community" element={<CommunityPage />} />
         <Route path="profile" element={<Profile />} />
         <Route path="help" element={<FAQ/>} />
         <Route path="tutor" element={<Tutorial/>} />
         <Route/>
        </Routes>
    
    </Router>
  );
};

export default App;
