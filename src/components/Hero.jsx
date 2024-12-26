import React from "react";
import heroImage from "../assets/images/hero.jpg"; // Adjust the path as needed

const Hero = () => {
  return (
    <section className="bg-blue-600 text-white py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Alumni Network</h1>
      <p className="mb-6">Connecting former members of the Ethiopia Customs Commission</p>
      <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-200">
        Join the Network
      </button>
    </section>
  );
};

export default Hero;