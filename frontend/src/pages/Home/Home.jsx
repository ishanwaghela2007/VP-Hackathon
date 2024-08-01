// Import the necessary libraries
import React from 'react';
// import { createRoot } from 'react-dom/client';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">SocialApp</div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
            <a href="#" className="text-gray-800 hover:text-gray-600">Profile</a>
            <a href="#" className="text-gray-800 hover:text-gray-600">Messages</a>
            <a href="#" className="text-gray-800 hover:text-gray-600">Logout</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto mt-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="hidden md:block col-span-1">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Friends</h2>
              <ul>
                <li className="mb-2">
                  <a href="#" className="text-gray-800 hover:text-gray-600">Friend 1</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-800 hover:text-gray-600">Friend 2</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-800 hover:text-gray-600">Friend 3</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Feed */}
          <div className="col-span-2">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-4">New Post</h2>
              <textarea className="w-full p-2 border rounded-lg mb-4" rows="4" placeholder="What's on your mind?"></textarea>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Post</button>
            </div>

            <div className="mt-6">
              <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-gray-800">User 1</h3>
                  <span className="text-gray-600 text-sm">10 mins ago</span>
                </div>
                <p className="mt-2 text-gray-800">This is a sample post content.</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-gray-800">User 2</h3>
                  <span className="text-gray-600 text-sm">20 mins ago</span>
                </div>
                <p className="mt-2 text-gray-800">This is another sample post content.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;