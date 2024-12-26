import React from 'react';
import { useParams } from 'react-router-dom';

// Sample news data
const newsData = [
  {
    id: 1,
    title: 'Inkutatash Celebration',
    date: '2024-11-15',
    description: 'Join us on September 11th for Enkutatash, the Ethiopian New Year! We’ll be hosting a community gathering featuring traditional music, dance, and food. Bring your family and friends to celebrate the start of a new year in our cultural calendar.',
    image: '/debele.jpg',
    author: 'elias'
  },
  {
    id: 2,
    title: 'Traditional Coffee Ceremony Workshop',
    date: '2024-09-10',
    description: 'We are excited to announce a workshop on the Ethiopian coffee ceremony, a significant cultural tradition. This event will take place on October 15th, offering insights into the history and significance of this beautiful ritual.',
    image: 'https://via.placeholder.com/300',
    author: 'elias'
  },
  // Add additional news items here...
];

const NewsDetail = () => {
  const { id } = useParams();
  const newsItem = newsData.find(item => item.id === parseInt(id));

  if (!newsItem) {
    return <h2>News not found!</h2>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{newsItem.title}</h1>
      <img src={newsItem.image} alt={newsItem.title} className="w-full h-64 object-cover rounded mb-4" />
      <p className="text-gray-700 mb-2"><strong>Date:</strong> {newsItem.date}</p>
      <p className="text-gray-700">{newsItem.description}</p>
    </div>
  );
};

export default NewsDetail;