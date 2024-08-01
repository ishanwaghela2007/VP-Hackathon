import React, { useState } from 'react';
import Navbar from "../../components/Navbar/UserNavbar";
import {Link} from 'react-router-dom';

const ConnectHub = () => {
  const [statusUpdate, setStatusUpdate] = useState('');
  const [feedItems, setFeedItems] = useState([
    {
      id: 1,
      type: 'post',
      author: 'Robert Hammond',
      content: "Adventurous trip memories shared. Explore Sri Lankan beauty! 🌴🌊🏞️🌅",
      images: ['/path/to/mountains.jpg', '/path/to/forest.jpg'],
      likes: 0,
      comments: 0,
      shares: 0,
      time: '20 minutes ago'
    },
    {
      id: 2,
      type: 'photoAlbum',
      author: 'John Doe',
      content: 'Exciting Exchange Offer Available! Get in touch for details.',
      images: ['/path/to/blue.jpg', '/path/to/train.jpg', '/path/to/beach.jpg', '/path/to/snowboard.jpg', '/path/to/abstract.jpg'],
      likes: 20,
      comments: 5,
      shares: 3,
      time: '1 hour ago'
    },
    {
      id: 3,
      type: 'status',
      author: 'Eva Rodriguez',
      content: 'Attended an awesome concert but had a tall view-blocker. Feeling frustrated. 😑 😞',
      likes: 25,
      comments: 1,
      shares: 0,
      time: 'Tuesday, 15 August 3:30 PM'
    },
  ]);

  const handleStatusUpdate = () => {
    if (statusUpdate.trim()) {
      setFeedItems([
        {
          id: feedItems.length + 1,
          type: 'status',
          author: 'You',
          content: statusUpdate,
          likes: 0,
          comments: 0,
          shares: 0,
          time: 'Just now'
        },
        ...feedItems,
      ]);
      setStatusUpdate('');
    }
  };

  const handleLike = (id) => {
    setFeedItems(feedItems.map(item => 
      item.id === id ? { ...item, likes: item.likes + 1 } : item
    ));
  };

  return (
    <>
     <Navbar />
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-900 text-white">
       
      {/* Left Sidebar */}
      <aside className="w-full lg:w-64 bg-gray-800 p-4">
        <nav className="mb-8">
          <ul className="space-y-2">
            <li className="flex items-center space-x-3 font-bold">
              <span className="w-6 h-6 bg-gray-600 rounded-full"></span>
              <span>ConnectHub Home</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-6 h-6 bg-gray-600 rounded-full"></span>
              <span>View your profile</span>
            </li>
          </ul>
        </nav>
        <div className="mb-8">
          <h3 className="font-bold mb-2">My Favorites</h3>
          <ul className="space-y-2">
            <li>New Messages</li>
            <li>Find Friends</li>
            <li>Personalized Feed</li>
            <li>Latest Stories</li>
            <li>Upcoming Events</li>
            <li>Special Moments</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Join Groups</h3>
          <ul className="space-y-2">
            <li>Pet Enthusiasts</li>
            <li>Gaming Community</li>
            <li>Explore the World</li>
            <li>Fun Pet Moments</li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-6 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          {/* Status Update Input */}
          <div className="bg-gray-800 rounded-lg p-4 mb-6">
            <div className="flex items-center mb-4">
              <span className="text-xl mr-2">What's new with you?</span>
              <button onClick={handleStatusUpdate} className="ml-auto bg-gray-700 text-white px-4 py-1 rounded">Share</button>
            </div>
            <textarea
              value={statusUpdate}
              onChange={(e) => setStatusUpdate(e.target.value)}
              placeholder="Share an update..."
              className="w-full bg-gray-700 text-white p-2 rounded resize-none"
            />
            <div className="flex space-x-4 mt-4">
              <button className="text-gray-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              </button>
              <button className="text-gray-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </button>
              <button className="text-gray-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </button>
            </div>
          </div>

          {/* Feed Items */}
          {feedItems.map(item => (
            <div key={item.id} className="bg-gray-800 rounded-lg p-4 mb-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-600 rounded-full mr-3"></div>
                <div>
                  <h3 className="font-bold">{item.author}</h3>
                  <p className="text-sm text-gray-400">{item.time}</p>
                </div>
                <button className="ml-auto text-gray-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                </button>
              </div>
              <p className="mb-4">{item.content}</p>
              {item.images && (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2 mb-4">
                  {item.images.map((img, index) => (
                    <div key={index} className="bg-gray-700 h-40 rounded-lg"></div>
                  ))}
                </div>
              )}
                            <div className="flex justify-between text-gray-400 border-t border-gray-700 pt-2">
                <button onClick={() => handleLike(item.id)} className="flex items-center space-x-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 9l3-3m0 0l-3-3m3 3H3m0 12h11m0 0l3 3m-3-3l-3-3"></path></svg>
                  <span>{item.likes}</span>
                </button>
                <button className="flex items-center space-x-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span>{item.comments}</span>
                </button>
                <button className="flex items-center space-x-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h18M9 3v2M15 3v2M6 21h12a2 2 0 002-2v-7a2 2 0 00-2-2H6a2 2 0 00-2 2v7a2 2 0 002 2z"></path></svg>
                  <span>{item.shares}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
    </>
  );
};

export default ConnectHub;

