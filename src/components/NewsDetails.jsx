import React from 'react';
import { useParams } from 'react-router-dom';

const newsData = [
  {
    id: 1,
    title: "Alumni Spotlight: Debele Kebeta",
    date: "Sep 30, 2024",
    image: "/images/debele.jpg",
    description: "Debele Kebeta, CEO at Example Corp., shares his journey.",
    content: "Detailed content about Debele Kebeta's journey, achievements, and insights."
  },
  {
    id: 2,
    title: "Alumni Achievements",
    date: "Sep 25, 2024",
    image: "/images/event.jpg",
    description: "Celebrating the accomplishments of our alumni.",
    content: "More detailed information about the achievements of various alumni."
  }
];

const NewsDetail = () => {
  const { id } = useParams();
  const newsItem = newsData.find(news => news.id === parseInt(id));

  if (!newsItem) {
    return <div>News not found!</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4">{newsItem.title}</h2>
      <img src={newsItem.image} alt={newsItem.title} className="w-full h-64 object-cover rounded mb-4" />
      <p className="text-gray-600">{newsItem.date}</p>
      <p className="mb-4">{newsItem.description}</p>
      <p>{newsItem.content}</p>
    </div>
  );
};

export default NewsDetail