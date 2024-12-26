import React from 'react';
import Hero from '../components/Hero';
import FeaturedAlumni from '../components/FeaturedAlumni';
import EventsPreview from '../components/EventsPreview';
import NewsAndResourcesPreview from '../components/NewsAndResourcesPreview';
import JoinUs from '../components/Jionus';

  const Home = () => {
    return (
      <div>
        <Hero />
        <FeaturedAlumni />
        <EventsPreview />
      <NewsAndResourcesPreview />
        <JoinUs />
      </div>
    );
  };
  
  export default Home;