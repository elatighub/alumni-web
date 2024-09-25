import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white p-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Customs & Revenue Authority of Ethiopia</p>
      </div>
    </footer>
  );
};

export default Footer;