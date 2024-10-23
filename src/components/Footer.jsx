import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white p-4 flex items-center">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Customs & Revenue Authority of Ethiopia</p>
      </div>
      <ul className="  rounded-sm flex items-center">
      <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white" px-4 py-2 rounded-sm>Facebook</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white px-4 py-2 rounded-sm">Twitter</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white px-4 py-2 rounded-sm">Instagram</a></li>
          <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white px-4 py-2 rounded-sm">LinkedIn</a></li>
        </ul>
    </footer>
  );
};

export default Footer;