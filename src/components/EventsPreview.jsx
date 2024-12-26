import React from 'react';

const EventsPreview = () => {

  // Sample data for events (replace with real data or fetch from an API)
  const events = [
    {
      id: 1,
      title: 'Alumni Meetup',
      date: 'November 10, 2024',
      location: 'Addis Ababa, Ethiopia',
      description: 'Join us for an evening of networking and celebration.',
      loggedInOnly: 'Full details and RSVP are available for registered alumni.',
    },
    {
      id: 2,
      title: 'Webinar on Customs & Trade',
      date: 'December 5, 2024',
      location: 'Online',
      description: 'An interactive webinar on recent trends in customs and international trade.',
      loggedInOnly: 'Full details and RSVP are available for registered alumni.',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">{event.title}</h3>
            <p className="text-gray-600 mb-2">Date: {event.date}</p>
            <p className="text-gray-600 mb-2">Location: {event.location}</p>
            <p className="text-gray-600 mb-4">{event.description}</p>
            <p className="text-blue-700">{event.loggedInOnly}</p>
            <button
              className="mt-4 bg-gray-300 text-blue-800 py-2 px-4 rounded-md cursor-not-allowed"
              disabled
            >
              Log in to RSVP
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};



export default EventsPreview;