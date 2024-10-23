import React from 'react';
import HeroSection from '../components/HeroSection';
import Events from '../components/Events';
import News from '../components/News';

const Home = () => {
  const renderSection = (title, Component, moreLink) => (
    <section className="my-8" aria-label={`${title} Section`}>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <Component />

    </section>
  );

  return (
    <div className="container mx-auto py-8">
      <HeroSection />

      <section className="my-8 text-center" aria-label="Welcome Section">
        <h2 className="text-2xl font-semibold mb-4">Welcome to the Alumni Network!</h2>
        <p className="text-gray-700">We're excited to connect with you and support your journey.</p>
      </section>

      {renderSection('Upcoming Events', Events, '/events')}
      {renderSection('Featured News and Updates', News, '/news')}

      <section className="my-8 text-center" aria-label="Get Involved Section">
        <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
        <p className="mb-4 text-gray-700">Join us in making a difference in the lives of our alumni and the community.</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">Join</button>
          <button className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700">Donate</button>
          <button className="bg-purple-600 text-white px-4 py-2 rounded shadow hover:bg-purple-700">Events</button>
        </div>
      </section>
    </div>
  );
};

export default Home;