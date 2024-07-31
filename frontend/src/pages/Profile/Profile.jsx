import React, { useState } from 'react';
import Navbar from "../../components/Navbar/UserNavbar";

function ProfilePage() {
  const [postText, setPostText] = useState('');
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: 'User',
      content: 'User is excited about life',
      timestamp: 'Just now',
      images: [1, 2, 3, 4]
    }
  ]);

  const handlePost = () => {
    if (postText.trim()) {
      setPosts([
        {
          id: posts.length + 1,
          user: 'User',
          content: postText,
          timestamp: 'Just now',
          images: []
        },
        ...posts
      ]);
      setPostText('');
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <header className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold">Profile</h1>
          <div className="flex items-center space-x-2">
            <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
            </button>
            <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            </button>
            <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            </div>
          </div>
        </header> */}
        <Navbar />

        <main className="mt-4">
          <div className="relative">
            <div className="w-full h-48 bg-gray-700"></div>
            <div className="absolute bottom-0 left-4 transform translate-y-1/2">
              <div className="w-24 h-24 bg-gray-600 rounded-full border-4 border-gray-900 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="flex flex-col sm:flex-row sm:justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">User Profile</h2>
                <p className="text-gray-400">367 connections</p>
              </div>
              <div className="flex space-x-2 mt-4 sm:mt-0">
                <button className="px-4 py-2 bg-red-500 rounded-full hover:bg-red-400 transition">Connect</button>
                <button className="px-4 py-2 bg-gray-700 rounded-full hover:bg-gray-600 transition">Chat</button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row mt-4 space-y-2 sm:space-y-0 sm:space-x-2 overflow-x-auto">
              <button className="px-4 py-2 bg-red-500 rounded-full hover:bg-red-400 transition">Posts</button>
              <button className="px-4 py-2 bg-gray-700 rounded-full hover:bg-gray-600 transition">About</button>
              <button className="px-4 py-2 bg-gray-700 rounded-full hover:bg-gray-600 transition">Gallery</button>
              <button className="px-4 py-2 bg-gray-700 rounded-full hover:bg-gray-600 transition">Clips</button>
              <button className="px-4 py-2 bg-gray-700 rounded-full hover:bg-gray-600 transition">Contacts</button>
            </div>

            <div className="flex flex-col sm:flex-row mt-6 space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="w-full sm:w-1/3 space-y-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="font-bold mb-2">Personal Details</h3>
                  <div className="flex flex-col space-y-2">
                    <button className="w-full py-2 bg-gray-700 rounded hover:bg-gray-600 transition">Update bio</button>
                    <button className="w-full py-2 bg-gray-700 rounded hover:bg-gray-600 transition">Edit profile</button>
                    <button className="w-full py-2 bg-gray-700 rounded hover:bg-gray-600 transition">Add interests</button>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="font-bold mb-2">Memories</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="w-full h-24 bg-gray-700 rounded"></div>
                    <div className="w-full h-24 bg-gray-700 rounded"></div>
                    <div className="w-full h-24 bg-gray-700 rounded"></div>
                    <div className="w-full h-24 bg-gray-700 rounded"></div>
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-2/3 space-y-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="flex flex-col sm:flex-row items-center mb-4">
                    <div className="w-10 h-10 bg-gray-600 rounded-full mb-2 sm:mb-0 sm:mr-2 flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    </div>
                    <input 
                      type="text" 
                      placeholder="What's new with you today?"
                      className="flex-grow bg-transparent outline-none border-b-2 border-gray-700 py-2 px-4 mb-2 sm:mb-0"
                      value={postText}
                      onChange={(e) => setPostText(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="flex space-x-2 mb-2 sm:mb-0">
                      <button className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition">📷</button>
                      <button className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition">📎</button>
                      <button className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition">📍</button>
                      <button className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition">😊</button>
                    </div>
                    <button 
                      className="px-4 py-2 bg-gray-700 rounded-full hover:bg-gray-600 transition"
                      onClick={handlePost}
                    >
                      Share
                    </button>
                  </div>
                </div>

                {posts.map(post => (
                  <div key={post.id} className="bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gray-600 rounded-full mr-2 flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                      </div>
                      <div>
                        <p className="font-bold">{post.user}</p>
                        <p className="text-sm text-gray-400">{post.timestamp}</p>
                      </div>
                      <button className="ml-auto text-gray-400 hover:text-gray-300 transition">...</button>
                    </div>
                    <p className="mb-4">{post.content}</p>
                    {post.images.length > 0 && (
                      <div className="grid grid-cols-2 gap-2">
                        {post.images.map(img => (
                          <div key={img} className="w-full h-32 bg-gray-700 rounded"></div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ProfilePage;
