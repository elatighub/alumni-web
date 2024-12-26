import React from 'react';

const NewsAndResourcesPreview = () => {
  // Sample data to simulate news and resources articles
  const articles = [
    {
      id: 1,
      title: 'The Impact of Customs Policies on Trade',
      description: 'An in-depth analysis of recent customs policy changes and their effects on global trade.',
      link: '#read-more-1'
    },
    {
      id: 2,
      title: 'Career Growth in Customs and Logistics',
      description: 'Explore growth opportunities and key skills in the field of customs and logistics.',
      link: '#read-more-2'
    },
    {
      id: 3,
      title: 'Tips for Building a Professional Network',
      description: 'Networking tips for alumni looking to connect within the industry and beyond.',
      link: '#read-more-3'
    }
  ];

  return (
    <div className="bg-white p-8">
      <h2 className="text-3xl font-bold text-center mb-6">News & Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <div key={article.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{article.title}</h3>
            <p className="text-gray-600 mt-2">{article.description}</p>
            <a href={article.link} className="text-blue-700 hover:underline mt-4 block">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsAndResourcesPreview;