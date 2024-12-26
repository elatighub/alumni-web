import React from 'react';

const EventDetails = ({ event }) => {
  return (
    <section className="py-10 px-6 md:px-12 lg:px-24">
      <h2 className="text-3xl font-semibold text-blue-700 mb-4">{event.title}</h2>
      <p className="text-gray-600 mb-6">{event.description}</p>
      <div className="mb-6">
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Location:</strong> {event.location}</p>
      </div>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-500">
        Add to Calendar
      </button>
    </section>
  );
};

export default EventDetails;