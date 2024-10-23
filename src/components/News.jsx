import React from 'react';

const newsData = [
  {
    id: 1,
    title: "Planting plants:customs and Revenue Authority",
    date: "Sep 30, 2024",
    image: "public/plant1.jpg", // Add the actual image path
    description: "Customs and Revenue Authority, CEO at Example Corp., shares his journey."
  },
  {
    id: 2,
    title: "Alumni Achievements",
    date: "Sep 25, 2024",
    image: "path/to/achievements.jpg", // Add the actual image path
    description: "Celebrating the accomplishments of our alumni."
  }
];

const News = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {newsData.map(news => (
        <div key={news.id} className="p-4 border rounded">
          <img src={news.image} alt={news.title} className="w-full h-48 object-cover rounded mb-4" />
          <h3 className="font-bold flex justify-center">{news.title}</h3>
          <p className="text-gray-600 flex justify-center">{news.date}</p>
          <p className="flex justify-center">{news.description}</p>
           <div className="flex justify-center mt-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Read More
        </button>
      </div>
        </div>
      ))}
    </div>
  );
};

export default News;