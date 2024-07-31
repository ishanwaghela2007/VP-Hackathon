import React, { useState } from 'react';
import Navbar from "../../components/Navbar/UserNavbar";

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
    <div className="flex min-h-screen bg-gray-900 text-white">
       
      {/* Left Sidebar */}
      <aside className="w-64 bg-gray-800 p-4">
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
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          {/* Status Update Input */}
          <div className="bg-gray-800 rounded-lg p-4 mb-6">
            <div className="flex items-center mb-4">
              <span className="text-xl mr-2">What's new with you?</span>
              <button className="ml-auto bg-gray-700 text-white px-4 py-1 rounded">Share</button>
            </div>
            <div className="flex space-x-4">
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
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {item.images.map((img, index) => (
                    <div key={index} className="bg-gray-700 h-40 rounded-lg"></div>
                  ))}
                </div>
              )}
              <div className="flex justify-between text-gray-400 border-t border-gray-700 pt-4">
                <button onClick={() => handleLike(item.id)} className="flex items-center">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
                  {item.likes}
                </button>
                <button className="flex items-center">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                  Chat Now {item.comments}
                </button>
                <button className="flex items-center">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                  Share {item.shares}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="w-80 bg-gray-800 p-4">
        <div className="mb-8">
          <h3 className="font-bold mb-4">Check out your events</h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="w-8 h-8 bg-gray-600 rounded-full mr-3 flex-shrink-0"></span>
              <div>
                <p className="font-bold">Backyard BBQ fun</p>
                <p className="text-sm text-gray-400">Sat 16 June, Tom's Garden</p>
              </div>
            </li>
            <li className="flex items-center">
              <span className="w-8 h-8 bg-gray-600 rounded-full mr-3 flex-shrink-0"></span>
              <div>
                <p className="font-bold">Community decision day</p>
                <p className="text-sm text-gray-400">Sat 16 June, Town Hall</p>
              </div>
            </li>
            <li className="flex items-center">
              <span className="w-8 h-8 bg-gray-600 rounded-full mr-3 flex-shrink-0"></span>
              <div>
                <p className="font-bold">Alternative music fest</p>
                <p className="text-sm text-gray-400">Sat 16 June, Tom's Garden</p>
              </div>
            </li>
            <li className="flex items-center">
              <span className="w-8 h-8 bg-gray-600 rounded-full mr-3 flex-shrink-0"></span>
              <div>
                <p className="font-bold">Comedy show possibility</p>
                <p className="text-sm text-gray-400">Sat 16 June, Tom's Garden</p>
              </div>
            </li>
            <li className="flex items-center">
              <span className="w-8 h-8 bg-gray-600 rounded-full mr-3 flex-shrink-0"></span>
              <div>
                <p className="font-bold">Exciting concert tour ahead</p>
                <p className="text-sm text-gray-400">Sat 16 June, Tom's Garden</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <h3 className="font-bold mb-4">Events</h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="w-8 h-8 bg-gray-600 rounded-full mr-3 flex-shrink-0"></span>
              <div>
                <p className="font-bold">John Doe</p>
                <p className="text-sm text-gray-400">Celebrating a milestone</p>
              </div>
            </li>
            <li className="flex items-center">
              <span className="w-8 h-8 bg-gray-600 rounded-full mr-3 flex-shrink-0"></span>
              <div>
                <p className="font-bold">Jane Smith</p>
                <p className="text-sm text-gray-400">Celebrating a special day</p>
              </div>
            </li>
            <li className="flex items-center">
              <span className="w-8 h-8 bg-gray-600 rounded-full mr-3 flex-shrink-0"></span>
              <div>
                <p className="font-bold">Alice Johnson</p>
                <p className="text-sm text-gray-400">Celebrating life achievements</p>
              </div>
            </li>
            <li className="flex items-center">
              <span className="w-8 h-8 bg-gray-600 rounded-full mr-3 flex-shrink-0"></span>
              <div>
                <p className="font-bold">Mark Taylor</p>
                <p className="text-sm text-gray-400">Reaching a new chapter</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <h3 className="font-bold mb-4">Promotions</h3>
          <div className="bg-red-600 rounded-lg p-4 text-center">
            <h4 className="text-2xl font-bold mb-2">Sale</h4>
            <p className="text-sm">Grab your favorite at amazing prices with discounts up to 70% off</p>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="font-bold mb-4">Join Community Chats</h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="w-8 h-8 bg-gray-600 rounded-full mr-3 flex-shrink-0"></span>
              <p>Pet Owners</p>
            </li>
            <li className="flex items-center">
              <span className="w-8 h-8 bg-gray-600 rounded-full mr-3 flex-shrink-0"></span>
              <p>Connect with</p>
            </li>
            <li className="flex items-center">
              <span className="w-8 h-8 bg-gray-600 rounded-full mr-3 flex-shrink-0"></span>
              <p>Vintage Car</p>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Engage in Group Chats</h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="w-8 h-8 bg-gray-600 rounded-full mr-3 flex-shrink-0"></span>
              <p>Plan BBQ gatherings</p>
            </li>
            <li className="flex items-center">
              <span className="w-8 h-8 bg-gray-600 rounded-full mr-3 flex-shrink-0"></span>
              <p>Sneaker enthusiasts</p>
            </li>
            <li className="flex items-center">
              <span className="w-8 h-8 bg-gray-600 rounded-full mr-3 flex-shrink-0"></span>
              <p>Live music vibes</p>
            </li>
          </ul>
        </div>
        <div className="mt-8">
          <h3 className="font-bold mb-4">Stay connected online</h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="w-8 h-8 bg-gray-600 rounded-full mr-3 flex-shrink-0"></span>
              <p>Mark Larsen's</p>
            </li>
            <li className="flex items-center">
              <span className="w-8 h-8 bg-gray-600 rounded-full mr-3 flex-shrink-0"></span>
              <p>Ethan Reynolds' feed</p>
            </li>
            <li className="flex items-center">
              <span className="w-8 h-8 bg-gray-600 rounded-full mr-3 flex-shrink-0"></span>
              <p>Ava Thompson's</p>
            </li>
            <li className="flex items-center">
              <span className="w-8 h-8 bg-gray-600 rounded-full mr-3 flex-shrink-0"></span>
              <p>Harper Mitchell's</p>
            </li>
            <li className="flex items-center">
              <span className="w-8 h-8 bg-gray-600 rounded-full mr-3 flex-shrink-0"></span>
              <p>Pablo Morandi's posts</p>
            </li>
          </ul>
        </div>
      </aside>
    </div>
    </>
  );
};

export default ConnectHub;