import React from 'react';
import Hero from '../components/Hero';
import AlumniOverview from '../components/AlumniOverview';
import EventsPreview from '../components/EventsPreview';
import News from '../components/News';
import JoinUs from '../components/Jionus';
import Login from "../components/Login";
  const Home = () => {
    return (
      <div>
        <Login/>
        <Hero />
        <News/>
        <AlumniOverview />
        <EventsPreview />
        <JoinUs />
      </div>
    );
  };
  
  export default Home;