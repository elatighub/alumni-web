import React from "react";

const News = () => {
  // Sample news data
  const newsList = [
    {
      id: 1,
      title: "New Customs Regulations",
      date: "December 30, 2024",
      description: "Get updated with the latest changes in customs procedures.",
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 2,
      title: "Annual Customs Meeting",
      date: "January 15, 2025",
      description: "Join the annual meeting to discuss key highlights of the year.",
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 3,
      title: "Trade Fair Announcement",
      date: "February 10, 2025",
      description: "Discover upcoming trade fairs and export opportunities.",
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 4,
      title: "New Export Policies",
      date: "March 5, 2025",
      description: "Learn about the latest policies on export documentation.",
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 5,
      title: "Digital Customs Systems",
      date: "April 12, 2025",
      description: "Updates on the integration of digital systems in customs.",
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 6,
      title: "Customs Clearance Workshop",
      date: "May 20, 2025",
      description: "Attend a workshop to simplify customs clearance processes.",
      image: 'https://via.placeholder.com/300',
    },
  ];

  return (
    <div className="bg-gray-100 py-8 px-4">
      <div className="max-w-8xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Upcoming News
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {newsList.map((news) => (
            
            <div
            
              key={news.id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            >
              <img src={news.image} alt={news.title} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">
                {news.title}
              </h3>
              <p className="text-gray-500 text-sm mb-2">{news.date}</p>
              <p className="text-gray-700">{news.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
