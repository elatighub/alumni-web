import React from 'react';

const eventsData = [
  {
    id: 1,
    title: "Networking Mixer",
    date: "Oct 15, 2024",
    image: "public/news.jpg", // Add the actual image path
    description: "Join us for an evening of networking with fellow alumni."
  },
  {
    id: 2,
    title: "Webinar: Career Development",
    date: "Oct 22, 2024",
    image: "public/debale.jpg", // Add the actual image path
    description: "Learn valuable career strategies from industry experts."
  },
  {
    id: 3,
    title: "Customs Familyday",
    date: "oct 1, 2024",
    image: "public/news1.jpg", // Add the actual image path
    description: "Reconnect with classmates and make new memories."
  },
  {
  id: 4,
  title: "Customs Familyday",
  date: "oct 1, 2024",
  image: "public/news1.jpg", // Add the actual image path
  description: "Reconnect with classmates and make new memories."
  }
];

const Events = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {eventsData.map(event => (
        <div key={event.id} className="p-4 border rounded">
          <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded mb-4" />
          <div className="flex justify-end mt-4"> <button className="bg-green-500 text-white px-4 py-2 rounded flex justify-end">{news.date}
           </button> 
         </div>
          <h3 className="font-bold flex justify-center">{event.title}</h3>
          <p className="flex justify-center">{event.description}</p>
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

export default Events;