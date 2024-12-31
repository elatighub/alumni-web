import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Login from "./Login"; // Import Login component
import Signup from "./Signup"; // Import Signup component

const publicNav = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  { path: "/news", label: "News" },
  { path: "/alumni", label: "Alumni Directory" },
  { path: "/events", label: "Events" },
];

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false); // State for login dropdown
  const [isSignupOpen, setIsSignupOpen] = useState(false); // State for signup dropdown

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleLoginDropdown = () => {
    setIsLoginOpen((prev) => !prev); // Toggle login dropdown
    if (isSignupOpen) setIsSignupOpen(false); // Close signup dropdown if open
  };

  const toggleSignupDropdown = () => {
    setIsSignupOpen((prev) => !prev); // Toggle signup dropdown
    if (isLoginOpen) setIsLoginOpen(false); // Close login dropdown if open
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY >= 14);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Top Bar */}
      <div className={`p-2 flex items-center ${darkMode ? "bg-gray-800" : "bg-gray-700"} flex-wrap`}>
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

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className={`p-2 text-white ${
            darkMode ? "bg-yellow-500" : "bg-gray-700"
          } rounded-md`}
          aria-label="Toggle dark mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      {/* Main Navigation */}
      <nav
        className={`px-4 py-2 fixed ${
          scrolled ? "top-0" : "top-14"
        } left-0 right-0 w-full ${
          darkMode ? "bg-gray-800" : "bg-blue-900"
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

            {/* Login Button */}
            <button
              onClick={toggleLoginDropdown} // Toggle login dropdown
              className="text-white px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-700"
            >
              Login
            </button>

            {/* Signup Button */}
            <button
              onClick={toggleSignupDropdown} // Toggle signup dropdown
              className="text-white px-3 py-2 w-100 rounded-md bg-green-600 hover:bg-green-700"
            >
              SignUp
            </button>

            {/* Login Dropdown */}
            {isLoginOpen && <Login />}

            {/* Signup Dropdown */}
            {isSignupOpen && <Signup />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
