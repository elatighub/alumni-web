import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png"; // Corrected relative path
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Your Navbar component continues...


const publicNav = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  { path: "/news", label: "News" },
  // { path: "/resources", label: "Resources" },
  { path: "/alumni", label: "Alumni Directory" },
  
  // { path: "/alumnip", label: "Alumni Profile" },
  { path: "/events", label: "Events" },
  { path: "/login", label: "Login"},
  // { path: "/job", label: "Job Board" },
];

const MobileNavbar = ({ isOpen, handleLinkClick }) => (
  <div className={`md:hidden ${isOpen ? "block" : "hidden"} fixed top-0 left-0 right-0 bg-gray-900 mt-16 z-50`}>
    <div className="flex flex-col border-t border-white">
      {publicNav.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          onClick={handleLinkClick}
          className="text-white px-4 py-2 hover:bg-blue-800"
        >
          {link.label}
        </Link>
      ))}
    </div>
  </div>
);

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false); // For search visibility

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible); // Toggle search bar visibility
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY >= 14);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Top Bar */}
      <div className={`p-2 flex items-center ${darkMode ? 'bg-gray-800' : 'bg-gray-700'} flex-wrap`}>
        {/* Social Links */}
        <ul className="flex items-center space-x-4">
          {[
            { href: "https://www.facebook.com", icon: faFacebookF },
            { href: "https://www.twitter.com", icon: faTwitter },
            { href: "https://www.instagram.com", icon: faInstagram },
            { href: "https://www.linkedin.com", icon: faLinkedinIn },
          ].map(({ href, icon }, index) => (
            <li key={index}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white px-4 py-2 rounded-2xl hover:bg-blue-800"
              >
                <FontAwesomeIcon icon={icon} />
              </a>
            </li>
          ))}
        </ul>

        {/* Search Section
        <div className="flex-grow mx-2">
          {/* Search Bar - Visible on Large Screens 
          <div className={`hidden md:flex items-center ${isSearchVisible ? 'block' : 'hidden'}`}>
            <input
              type="text"
              placeholder="Search..."
              className={`p-2 rounded-l-md border-none focus:outline-none ${
                darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'
              }`}
            />
            <button
              className={`p-2 rounded-r-md ${
                darkMode ? 'bg-blue-500' : 'bg-blue-600'
              } text-white hover:bg-blue-600`}
            >
              Search
            </button>
          </div>

           Search Icon - Visible on Small Screens 
          <button
            className="block md:hidden p-2 text-white"
            aria-label="Search"
            onClick={toggleSearch} // Toggle search visibility on click
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div> */}

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className={`p-2 text-white ${
            darkMode ? 'bg-yellow-500' : 'bg-gray-700'
          } rounded-md`}
          aria-label="Toggle dark mode"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>

      {/* Main Navigation */}
      <nav
        className={`px-4 py-2 fixed ${
          scrolled ? 'top-0' : 'top-14'
        } left-0 right-0 w-full ${
          darkMode ? 'bg-gray-800' : 'bg-blue-900'
        } z-40 transition-all duration-300`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center text-white">
            <img src={logo} alt="Logo" className="h-14 w-14 rounded-full border mr-2" />
            <span className="text-lg font-bold">ECC Alumni Network</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            {isOpen ? <AiOutlineClose className="w-6 h-6" /> : <AiOutlineMenu className="w-6 h-6" />}
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex md:items-center space-x-4">
            {publicNav.map((link) => (
              <Link key={link.path} to={link.path} className="text-white px-3 py-2 rounded-md hover:bg-blue-800">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Navbar */}
          <MobileNavbar isOpen={isOpen} handleLinkClick={handleLinkClick} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
