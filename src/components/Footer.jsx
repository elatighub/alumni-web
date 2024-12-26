import React from 'react'; // Keep this line
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white p-4 flex items-center">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Customs & Revenue Authority of Ethiopia</p>
      </div>
      <ul className="flex items-center w-3/4">
          {[faFacebookF, faTwitter, faInstagram, faLinkedinIn].map((icon, index) => (
            <li key={index}>
              <a
                href={`https://${icon.iconName}.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white px-4 py-2 rounded-sm hover:bg-blue-800"
              >
                <FontAwesomeIcon icon={icon} />
              </a>
            </li>
          ))}
        </ul>
    </footer>
  );
};

export default Footer;