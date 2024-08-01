import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const SocialMediaApp = () => {
  const [message, setMessage] = useState('');

  const posts = [
    { id: 1, author: 'Alex', content: "What's up?", avatar: '👤' },
    { id: 2, author: 'Mia', content: "Haha, that's funny", avatar: '👤' },
    { id: 3, author: 'Leo', content: "Check out this pic!", avatar: '👤' },
    { id: 4, author: 'Max', content: "Let's hang out soon", avatar: '👤' },
    { id: 5, author: 'Noah', content: "Sounds good to me", avatar: '👤' },
    { id: 6, author: 'Jack', content: "Nice, I love cats too!", avatar: '👤' },
    { id: 7, author: 'Ava', content: "Why did you disappear?", avatar: '🌅' },
  ];

  const messages = [
    { id: 1, content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, aenean commodo ligula eget dolor', sender: 'other', time: 'Fri 8:30 AM' },
    { id: 2, content: 'You got this! Keep going.', sender: 'user' },
    { id: 3, content: 'Almost there. Can\'t wait to', sender: 'other', time: '12:00 PM' },
    { id: 4, content: 'Just around', sender: 'user' },
    { id: 5, content: 'Running a bit', sender: 'user' },
    { id: 6, content: 'Oops, my', sender: 'user' },
    { id: 7, content: 'You crack me up!', sender: 'other' },
    { id: 8, content: "Haha, I'm here! :D", sender: 'user' },
    { id: 9, content: "https://example.com/image.jpg", sender: 'user', type: 'image' },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white flex-col md:flex-row">
      {/* Left Sidebar */}
      <div className=" w-full md:w-1/4 bg-gray-800 p-4 flex flex-col">
        <h2 className="text-xl font-bold mb-4">Feed</h2>
        <div className="mb-4 flex items-center">
          <span className="mr-2">Profile</span>
          <span className="material-icons">location_on</span>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search for friends"
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
        </div>
        <div className="flex-grow overflow-y-auto">
          {posts.map((post) => (
            <div key={post.id} className="mb-3 flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center mr-2">
                {post.avatar}
              </div>
              <div>
                <p className="font-semibold">Latest post from {post.author}</p>
                <p className="text-sm text-gray-400">{post.author}: {post.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <div className="bg-gray-800 p-4 flex items-center">
          <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center mr-3">
            👤
          </div>
          <div>
            <h2 className="text-xl">Messages with Mia</h2>
            <span className="text-sm text-green-500">Active now</span>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4 bg-gray-900">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`mb-2 ${
                msg.sender === 'user' ? 'text-right' : 'text-left'
              }`}
            >
              <div
                className={`inline-block p-2 rounded-lg ${
                  msg.sender === 'user' ? 'bg-blue-600' : 'bg-gray-700'
                }`}
              >
                {msg.type === 'image' ? (
                  <img src={msg.content} alt="Shared" className="max-w-xs rounded" />
                ) : (
                  msg.content
                )}
              </div>
              {msg.time && (
                <div className="text-xs text-gray-500 mt-1">{msg.time}</div>
              )}
            </div>
          ))}
        </div>
        <div className="p-4 bg-gray-800">
          <div className="flex items-center">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message"
              className="flex-1 p-2 rounded-l bg-gray-700 text-white"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white p-2 rounded-r"
            >
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      {/* <div className="hidden md:block md:w-1/4 bg-gray-800 p-4">
        <h2 className="text-xl font-bold mb-4">Details</h2>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <button className="bg-gray-700 p-2 rounded flex items-center justify-center">
            <span className="material-icons">photo</span>
          </button>
          <button className="bg-gray-700 p-2 rounded flex items-center justify-center">
            <span className="material-icons">folder</span>
          </button>
          <button className="bg-gray-700 p-2 rounded flex items-center justify-center">
            <span className="material-icons">link</span>
          </button>
          <button className="bg-gray-700 p-2 rounded flex items-center justify-center">
            <span className="material-icons">more_horiz</span>
          </button>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Friends' photos (286)</h3>
          <div className="grid grid-cols-3 gap-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-700 aspect-square rounded"></div>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Shared posts (4)</h3>
          <div className="space-y-2">
            {['Post.docx', 'Event Reminder', 'Article - Travel', 'Report.docx'].map((item, i) => (
              <div key={i} className="bg-gray-700 p-2 rounded flex items-center">
                <span className="material-icons mr-2">description</span>
                {item}
              </div>
            ))}
          </div>
        </div>
        
      </div> */}
    </div>
  );
};

export default SocialMediaApp;
