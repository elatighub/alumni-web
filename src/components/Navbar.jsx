import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaHome, FaInfoCircle, FaBook, FaUsers, FaCalendarAlt, FaEnvelope, FaNewspaper } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };
  return (
    <div>
      {/* New Header with Search Bar and Button */}
      <div className="bg-blue-900 p-2 flex justify-center">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded-l-md border-none focus:outline-none"
        />
        <button className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">
          Search
        </button>
      </div>

      {/* Main Navbar */}
      <nav className="bg-green-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white text-lg font-bold">
            <img src={logo} alt="Logo" className="h-8 inline-block" />
          </Link>
          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <AiOutlineClose className="w-6 h-6" /> : <AiOutlineMenu className="w-6 h-6" />}
            </button>
          </div>
          {/* Navigation Links */}
          <div className={`md:flex md:items-center ${isOpen ? "block" : "hidden"} absolute md:static bg-blue-800 w-full md:w-auto transition-all duration-300`}>
            <div className="flex flex-col md:flex-row border-t border-white md:border-none">
              <Link to="/" onClick={handleLinkClick} className="text-white mx-2 py-2 md:py-0 flex items-center">
                <FaHome className="mr-1" /> Home
              </Link>
              <Link to="/about" onClick={handleLinkClick} className="text-white mx-2 py-2 md:py-0 flex items-center">
                <FaInfoCircle className="mr-1" /> About Us
              </Link>
              <Link to="/resources" onClick={handleLinkClick} className="text-white mx-2 py-2 md:py-0 flex items-center">
                <FaBook className="mr-1" /> Resources
              </Link>
              <Link to="/alumni" onClick={handleLinkClick} className="text-white mx-2 py-2 md:py-0 flex items-center">
                <FaUsers className="mr-1" /> Alumni Directory
              </Link>
              <Link to="/events" onClick={handleLinkClick} className="text-white mx-2 py-2 md:py-0 flex items-center">
                <FaCalendarAlt className="mr-1" /> Events
              </Link>
              <Link to="/contact" onClick={handleLinkClick} className="text-white mx-2 py-2 md:py-0 flex items-center">
                <FaEnvelope className="mr-1" /> Contact Us
              </Link>
              <Link to="/news" onClick={handleLinkClick} className="text-white mx-2 py-2 md:py-0 flex items-center">
                <FaNewspaper className="mr-1" /> News Updates
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;