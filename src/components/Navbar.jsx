import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div >
      <div className="bg-gray-600 p-2 flex items-center ">
      <ul className="flex items-center px-4 py-2 rounded-sm w-2/3">
      <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white" px-4 py-2 rounded-sm>Facebook</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white px-4 py-2 rounded-sm">Twitter</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white px-4 py-2 rounded-sm">Instagram</a></li>
          <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white px-4 py-2 rounded-sm">LinkedIn</a></li>
        </ul>
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
      <nav className=" bg-blue-900 p-4">
        <div className="container mx- flex justify-between items-center">
          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-blue focus:outline-none">
              {isOpen ? <AiOutlineClose className="w-6 h-6" /> : <AiOutlineMenu className="w-6 h-6"  />}
            </button>
          </div>
          {/* Navigation Links */}
          <div className={`md:flex  md:items-center ${isOpen ? "block" : "hidden"}  absolute md:static w-100 md:w-auto transition-all duration-300`}>
            <div className="flex flex-col md:flex-row border-t border-white md:border-none md:items-center">
            <Link to="/" className="text-white flex items-center w-full text-lg font-bold">
          <img src={logo} alt="Logo" className="rounded-full h-14 inline-block border" />
          <p className ="mx-2" > ECC Alumni Network </p>
        </Link>
              <Link to="/" onClick={handleLinkClick} className="text-white mx-2 px-6 py-2 bg-blue-500 rounded-md flex items-center hover:bg-blue-800">
              Home
              </Link>
              <Link to="/about" onClick={handleLinkClick} className="text-white mx-2 px-6 py-2 bg-blue-500 rounded-md flex items-center hover:bg-blue-800">
                About 
              </Link>
              <Link to="/resources" onClick={handleLinkClick} className="text-white mx-2 px-4 py-2 bg-blue-500 rounded-md flex items-center hover:bg-blue-800">
                Resources
              </Link>
              <Link to="/alumni" onClick={handleLinkClick} className="text-white mx-2 px-4 py-2 bg-blue-500 rounded-md flex items-center hover:bg-blue-800">
               Alumni Directory
              </Link>
              <Link to="/events" onClick={handleLinkClick} className="text-white mx-2 px-4 py-2 bg-blue-500 rounded-md flex items-center hover:bg-blue-800">
                Events
              </Link>
              <Link to="/contact" onClick={handleLinkClick} className="text-white mx-2 px-4 py-2 bg-blue-500 rounded-md flex items-center hover:bg-blue-800">
               Contact 
              </Link>
              <Link to="/news" onClick={handleLinkClick} className="text-white mx-2 px-4 py-2 bg-blue-500 rounded-md flex items-center hover:bg-blue-800">
                 News 
              </Link>
            </div>
          </div>
          {/* Login Link on the right */}
          <Link to="/login" onClick={handleLinkClick} className="text-white bg-blue-500 rounded-md px-4 py-2 hover:bg-blue-600">
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;