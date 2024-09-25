import React from "react";
import heroImage from "../assets/images/hero-image.png"; // Adjust the path

const HeroSection = () => {
  return (
    <div className="relative w-full h-64 bg-gray-400">
      <img 
        src={heroImage} 
        alt="Hero" 
        className="absolute inset-0 object-cover w-full h-full opacity-50" 
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-white">Welcome to the Alumni Network</h1>
      </div>
    </div>
  );
};

export default HeroSection;