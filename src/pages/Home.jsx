import React from 'react';
import FeaturedNews from '../components/FeaturedNews';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <div className="container mx-auto py-8">
      <HeroSection />

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Overview of the Alumni Network</h2>
        <p className="text-gray-700">
          Our alumni network connects graduates from the Customs and Revenue Authority, 
          fostering a strong community for professional and personal growth. Through 
          events, mentorship programs, and networking opportunities, we support our 
          members in achieving their goals.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Featured News and Updates</h2>
        <FeaturedNews />
      </section>

      <section className="my-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
        <p className="mb-4 text-gray-700">
          Join us in making a difference in the lives of our alumni and the community.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
            Join
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700">
            Donate
          </button>
          <button className="bg-purple-600 text-white px-4 py-2 rounded shadow hover:bg-purple-700">
            Events
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;