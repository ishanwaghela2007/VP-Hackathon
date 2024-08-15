// Import the necessary libraries
import React from "react";

const Home = () => {
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
            Fitness App
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Home
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Profile
            </a>q
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Community
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Become Member
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Logout
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div
        className="container mx-auto px-6 py-12 bg-cover bg-center h-80"
        style={{
          backgroundImage:
            "url(https://t3.ftcdn.net/jpg/04/29/35/62/360_F_429356296_CVQ5LkC6Pl55kUNLqLisVKgTw9vjyif1.jpg)",
        }}
      >
        <div className="px-6 py-6 mt-6 text-center">
          <h1 className="text-3xl font-bold text-white">
            Welcome to
            <span className="flex justify-center items-center"></span>
            Fitlife
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
