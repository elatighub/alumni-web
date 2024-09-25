import React, { useState } from 'react';
import eventsData from '../data/eventsData';

const Events = () => {
  const [showRegistration, setShowRegistration] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleRegisterClick = (event) => {
    setSelectedEvent(event);
    setShowRegistration(true);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold">Upcoming Events</h2>
        {eventsData.filter(event => event.isUpcoming).map(event => (
          <div key={event.id} className="bg-gray-100 p-4 rounded shadow mb-4">
            <h3 className="font-semibold">{event.title}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p>{event.description}</p>
            <button 
              className="mt-2 text-blue-600 underline" 
              onClick={() => handleRegisterClick(event)}
            >
              Register
            </button>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold">Past Events Archive</h2>
        {eventsData.filter(event => !event.isUpcoming).map(event => (
          <div key={event.id} className="bg-gray-100 p-4 rounded shadow mb-4">
            <h3 className="font-semibold">{event.title}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p>{event.description}</p>
            <button 
              className="mt-2 text-blue-600 underline" 
              onClick={() => handleRegisterClick(event)}
            >
              View Gallery
            </button>
          </div>
        ))}
      </div>

      {showRegistration && selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-bold">Register for {selectedEvent.title}</h2>
            <p><strong>Date:</strong> {selectedEvent.date}</p>
            <p><strong>Location:</strong> {selectedEvent.location}</p>
            <form>
              <input type="text" placeholder="Name" className="border p-2 w-full mb-4" required />
              <input type="email" placeholder="Email" className="border p-2 w-full mb-4" required />
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
              <button 
                type="button" 
                className="ml-2 text-red-600" 
                onClick={() => setShowRegistration(false)}
              >
                Cancel
              </button>
            </form>
            <div className="mt-4">
              <h3 className="font-semibold">Photo Gallery</h3>
              <div className="flex space-x-2 mt-2">
                {selectedEvent.photoGallery.map((photo, index) => (
                  <img key={index} src={photo} alt={`Gallery ${index + 1}`} className="w-20 h-20 object-cover rounded" />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
