import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Auth.css'; // Import CSS for flip animation

function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md mx-auto perspective-1000 mt-[-55vh]">
        {/* Flip Container */}
        <div className="w-full h-full relative transform-style-preserve-3d transition-transform duration-500" style={{ transform: `rotateY(${isSignUp ? '180deg' : '0deg'})` }}>
          
          {/* Login Form */}
          <div className="absolute w-full h-full bg-white shadow-lg rounded-lg backface-hidden">
            <div className="flex flex-col items-center p-6">
              <h1 className="text-3xl sm:text-4xl font-bold mb-6">Login</h1>
              <form className="w-full">
                <div className="relative mb-4">
                  <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    className="w-full p-3 border-b-2 border-gray-300 rounded-none shadow-sm focus:border-gray-400"
                  />
                  <i className="fa fa-user-o absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                </div>
                <div className="relative mb-4">
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="w-full p-3 border-b-2 border-gray-300 rounded-none shadow-sm focus:border-gray-400"
                  />
                  <i className="fa fa-key absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                  <label className="flex items-center mb-2 sm:mb-0">
                    <input
                      type="checkbox"
                      id="defaultCheck1"
                      className="form-checkbox"
                    />
                    <span className="ml-2 text-gray-700">Remember me</span>
                  </label>
                  <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
                </div>
                <button className="w-full py-2 bg-gradient-to-r from-pink-600 to-red-400 text-white rounded-full shadow-md hover:bg-gradient-to-l transition-colors">
                  Login
                </button>
                <p className="text-center mt-5">
                  Don't have an account?{' '}
                  <button
                    onClick={() => setIsSignUp(true)}
                    className="text-blue-500 hover:underline"
                  >
                    Create your account
                  </button>
                </p>
              </form>
            </div>
          </div>

          {/* Sign Up Form */}
          <div className="absolute w-full h-full bg-white shadow-lg rounded-lg backface-hidden rotate-y-180">
            <div className="flex flex-col items-center p-6">
              <h1 className="text-3xl sm:text-4xl font-bold mb-6">Sign Up</h1>
              <form className="w-full">
                <div className="relative mb-4">
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    className="w-full p-3 border-b-2 border-gray-300 rounded-none shadow-sm focus:border-gray-400"
                  />
                  <i className="fa fa-user-o absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                </div>
                <div className="relative mb-4">
                  <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    className="w-full p-3 border-b-2 border-gray-300 rounded-none shadow-sm focus:border-gray-400"
                  />
                  <i className="fa fa-user-o absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                </div>
                <div className="relative mb-4">
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="w-full p-3 border-b-2 border-gray-300 rounded-none shadow-sm focus:border-gray-400"
                  />
                  <i className="fa fa-key absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                </div>
                <button className="w-full py-2 bg-gradient-to-r from-pink-600 to-red-400 text-white rounded-full shadow-md hover:bg-gradient-to-l transition-colors">
                  Sign Up
                </button>
                <p className="text-center mt-5">
                  Already have an account?{' '}
                  <button
                    onClick={() => setIsSignUp(false)}
                    className="text-blue-500 hover:underline"
                  >
                    Login
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;