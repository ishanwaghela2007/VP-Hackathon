// src/pages/BlogPage.jsx

import React from 'react';

const tutorials = Array.from({ length: 30 }, (_, i) => ({
  title: `Yoga series ${i + 1}`,
  description: `yoga asana :${i + 1}.`,
  link: `https://www.youtube.com/watch?v=TXU591OYOHA-${i + 1}` // Replace with actual links if available
}));

const BlogPage = () => {
  return (
    <div className="container mx-auto p-4 shadow-xl">
      <h1 className="text-4xl font-bold mb-8">Yoga Series: 1 to 30</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutorials.map((tutorial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{tutorial.title}</h2>
            <p className="text-gray-700 mb-4">{tutorial.description}</p>
            <a
              href={tutorial.link}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Tutorial
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
