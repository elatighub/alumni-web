import React from 'react';

const allNewsData = [
  {
    id: 1,
    title: "Alumni Spotlight: Debele Kebeta",
    date: "Sep 30, 2024",
    image: "/images/debele.jpg",
    description: "Debele Kebeta, CEO at Example Corp., shares his journey."
  },
  {
    id: 2,
    title: "Alumni Achievements",
    date: "Sep 25, 2024",
    image: "/images/event.jpg",
    description: "Celebrating the accomplishments of our alumni."
  },
  // Add more news articles here
];

const AllNews = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4">All News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {allNewsData.map(news => (
          <div key={news.id} className="p-4 border rounded">
            <img src={news.image} alt={news.title} className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="font-bold">{news.title}</h3>
            <p className="text-gray-600">{news.date}</p>
            <p>{news.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllNews;