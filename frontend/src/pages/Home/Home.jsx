// Import the necessary libraries
import React from 'react';
import {useState} from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  const [user,setuser]=useState(120)
  const [client,setclient]=useState(100)
  const [trade,settrade]=useState(98)
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">
            <img
              className="w-18 h-20"
              src="https://static.vecteezy.com/system/resources/previews/020/195/404/original/fitness-icon-for-your-website-design-logo-app-ui-free-vector.jpg"
              alt="Fitlife Logo"
            />
            Fitlife
          </div>
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-800 hover:text-gray-600">
              Home
            </Link>
            <Link to="/profile" className="text-gray-800 hover:text-gray-600">
              Profile
            </Link>
            <Link to="/Community" className="text-gray-800 hover:text-gray-600">
              Community
            </Link>
            <Link to="/tutor" className="text-gray-800 hover:text-gray-600">
              Yoga Series
            </Link>
            <Link to="/login" className="text-gray-800 hover:text-gray-600">
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <>
      <div
        className="container mx-auto px-6 py-12 bg-cover bg-center h-screen bg-transparent"
        style={{
          backgroundImage:
            "url(https://th.bing.com/th/id/OIG1.AVkPD3lkOyD_rE7EWjd0?pid=ImgGn)",

        }}
      >
        <div className="px-6 py-6 mt-6 text-center">
          <h1 className="text-3xl font-bold text-white">
            Cultivate Success with 
            <span className="flex justify-center items-center"></span>
            Fitlife
          </h1>
          <div className="text-center text-white">
          <p>Join our ever growing platform to become fit</p>
          <p>It is open source</p>
          </div>

        </div>
      </div>
      </>
      <>
      <div className="w-80 h-auto bg-white text-black p-6 border border-transparent rounded-xl shadow-xl mx-auto transform hover:scale-105 transition-transform duration-300">
  <img className="h-24 w-24 mx-auto mb-4 rounded-full border-4 border-white shadow-lg " src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg" alt="user icon"/>
  
  <p className="text-center text-2xl font-semibold mb-2">{user}k</p>
  <h2 className="text-center text-lg font-medium">Active Users within 30 days</h2>
</div>

      </>
      <>
      <div className="w-80 h-auto bg-white text-black p-6 border border-transparent rounded-xl shadow-xl mx-auto transform hover:scale-105 transition-transform duration-300">
  <img className="h-24 w-24 mx-auto mb-4 rounded-full border-4 border-white shadow-lg" src="https://static.vecteezy.com/system/resources/previews/007/296/447/original/user-icon-in-flat-style-person-icon-client-symbol-vector.jpg" alt="client icon"/>
  
  <p className="text-center text-2xl font-semibold mb-2">{client}k</p>
  <h2 className="text-center text-lg font-medium">Client</h2>
</div>

      </>
      <>
      <div className="w-80 h-auto bg-white text-black p-6 border border-transparent rounded-xl shadow-xl mx-auto transform hover:scale-105 transition-transform duration-300">
  <img className="h-24 w-24 mx-auto mb-4 rounded-full border-4 border-white shadow-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8E8UOrNbWngA9xfJH768494y1HwoVT1TeVQ&s" alt="client icon"/>
  
  <p className="text-center text-2xl font-semibold mb-2">{trade}k</p>
  <h2 className="text-center text-lg font-medium">Trade accros world</h2>
</div>
      </>
      <>
      {/* <Footer/> */}
      </>
    </div>

  );
};

export default Home;
