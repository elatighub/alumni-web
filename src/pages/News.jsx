import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import  {Link } from 'react-router-dom'


// Sample news data with images
const newsData = [
  {
    id: 1,
    title: 'Inkutatash Celebration',
    date: '2024-11-15',
    description: 'Join us on September 11th for Enkutatash, the Ethiopian New Year! We’ll be hosting a community gathering featuring traditional music, dance, and food. Bring your family and friends to celebrate the start of a new year in our cultural calendar.',
    image: '/debele.jpg', // Replace with actual image URL
    past: false,
    author:'elias'
  },
 {
    id: 2,
    title: 'Traditional Coffee Ceremony Workshop',
    date: '2024-09-10',
    description: 'We are excited to announce a workshop on the Ethiopian coffee ceremony, a significant cultural tradition. This event will take place on October 15th, offering insights into the history and significance of this beautiful ritual.',
    image: 'https://via.placeholder.com/300',
    past: true,
    author:'elias'
  },
  {
    id: 3,
    title: 'Introducing the Ethiopia-Diaspora Exchange Initiative',
    date: '2024-09-10',
    description: 'We are launching a program that connects alumni in the diaspora with local Ethiopian communities. This initiative aims to foster cultural exchange and collaboration on community development projects.',
    image: '/event.jpg',
    past: true,
    author:'elias'
  },
  {
    id: 4,
    title: 'Customs Family Day',
    date: '2024-09-10',
    description: 'Families often have unique ways of celebrating holidays, such as specific rituals, foods, or activities that bring members together.',
    image: 'https://via.placeholder.com/300',
    past: true,
    author:'elias'
  },
];

const truncateText = (text, maxLength) => {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};

const News = () => {
  return (
    <div className="container mx-auto p-6 ">
      <h1 className="text-3xl font-bold text-center mb-6">Latest News</h1>

      <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsData.map(news => (
            <div key={news.id} className="bg-white shadow-lg rounded-lg p-4 ">
              <img src={news.image} alt={news.title} className="w-full h-48 object-cover rounded mb-4" />
              <div className="flex justify-end mt-4"> 
                <button className="bg-green-800 px-4 py-2 text-white rounded ">
                  {news.date}
                </button> 
              </div>
              <h3 className="font-bold text-xl mb-2">{news.title}</h3>
              <p className="text-gray-700">{truncateText(news.description, 50)}</p>
              <div className="flex justify-center mt-4">
              {/* <h5 className="font-bold text-xl mb-2">{news.author}</h5> */}
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Read More
                </button>
               {/* <Link to="/" className='font-medium hover:text-orange-500 flex'> <FaArrowRight className='mt-2 ml-2'/></Link> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Alumni Spotlights */}
      {/* <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Alumni Spotlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsData.map(spotlight => (
            <div key={spotlight.id} className="bg-white shadow-lg rounded-lg p-4">
              <img src={spotlight.image} alt={spotlight.title} className="w-full h-48 object-cover rounded mb-4" />
              <div className="flex justify-end mt-4"> 
                <button className="bg-green-800 px-4 py-2 text-white rounded ">
                  {spotlight.date}
                </button> 
              </div>
              <h3 className="font-bold text-xl mb-2">{spotlight.title}</h3>
              <p className="text-gray-600 mb-2">{spotlight.date}</p>
              <p className="text-gray-700">{truncateText(spotlight.description, 50)}</p>
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Read More
              </button>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default News;