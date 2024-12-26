import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/resources", label: "Resources" },
  { path: "/alumni", label: "Alumni Directory" },
  { path: "/events", label: "Events" },
  { path: "/news", label: "News" },
  { path: "/contact", label: "Contact" },
  
];

const MobileNavbar = ({ isOpen, handleLinkClick }) => (
  <div className={`md:hidden ${isOpen ? "block" : "hidden"} mt-32 fixed top-0 left-0 right-0 bg-gray-900 transition-all duration-300 z-50 `}>
    <div className="flex flex-col border-t border-white">
      {navLinks.map((link) => (
        <Link 
          key={link.path} 
          to={link.path} 
          onClick={handleLinkClick} 
          className="text-white mx-2 px-4 py-2 hover:bg-blue-800"
        >
          {link.label}
        </Link>
      ))}
    </div>
  </div>
);

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className={`p-2 flex items-center ${darkMode ? 'bg-gray-800' : 'bg-gray-700'} flex-wrap`}>
      {/* Social Icons */}
      <ul className="flex items-center space-x-4">
        {[faFacebookF, faTwitter, faInstagram, faLinkedinIn].map((icon, index) => (
          <li key={index}>
            <a
              href={`https://${icon.iconName}.com`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white px-4 py-2 rounded-2xl hover:bg-blue-800"
            >
              <FontAwesomeIcon icon={icon} />
            </a>
          </li>
        ))}
      </ul>

      {/* Search Bar */}
      <div className="flex items-center flex-grow mx-2">
        <input
          type="text"
          placeholder="Search..."
          className={`p-2 rounded-l-md border-none focus:outline-none ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
        />
        <button className={`p-2 rounded-r-md ${darkMode ? 'bg-blue-500' : 'bg-blue-600'} text-white hover:bg-blue-600`}>
          Search
        </button>
      </div>

      {/* Dark Mode Toggle, Sign-In, and Sign-Up Buttons */}
      <div className="flex items-center space-x-2">
        <button
          onClick={toggleDarkMode}
          className={`p-2 text-white ${darkMode ? 'bg-yellow-500' : 'bg-gray-700'} rounded-md`}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
        
        {/* Sign-In Button */}
        <Link
          to="/signin"
          className="text-white bg-blue-500 rounded-md px-4 py-2 hover:bg-blue-600"
        >
          Sign In
        </Link>

        {/* Sign-Up Button */}
        <Link
          to="/signup"
          className="text-white bg-green-500 rounded-md px-4 py-2 hover:bg-green-600"
        >
          Sign Up
        </Link>
      </div>
    </div>
      <nav className={`px-4 py-2 mt-1 fixed top-14 left-0 right-0 w-full ${darkMode ? 'bg-gray-800' : 'bg-blue-900'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className={`text-white flex items-center`}>
            <img src={logo} alt="Logo" className="h-14 w-14 rounded-full border mr-2" />
            <span className="text-lg font-bold">ECC Alumni Network</span>
          </Link>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <AiOutlineClose className="w-6 h-6" /> : <AiOutlineMenu className="w-6 h-6" />}
            </button>
          </div>
          <div className="hidden md:flex md:items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={handleLinkClick} 
                className={`text-white m-2 px-2 py-2 rounded-md flex items-center ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-blue-500 hover:bg-blue-800'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <MobileNavbar isOpen={isOpen} handleLinkClick={handleLinkClick} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;