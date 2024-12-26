

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center">Contact Us</h1>
      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          Send Message
        </button>
      </form>

      <section className="mt-8">
        <h2 className="text-2xl m-2 font-bold">Follow Us</h2>
        <ul className="flex items-center w-3/4">
          {[faFacebookF, faTwitter, faInstagram, faLinkedinIn].map((icon, index) => (
            <li key={index}>
              <a
                href={`https://${icon.iconName}.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white px-6 py-2 m-6 rounded-3xl hover:bg-blue-800 bg-blue-600"
              >
                <FontAwesomeIcon icon={icon} />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
        <div className="mt-2 space-y-4">
          <div>
            <h3 className="font-semibold">How can I join the alumni association?</h3>
            <p>You can join by filling out our membership form on the website.</p>
          </div>
          <div>
            <h3 className="font-semibold">What events do you organize for alumni?</h3>
            <p>We organize networking events, workshops, and reunions throughout the year.</p>
          </div>
          <div>
            <h3 className="font-semibold">How can I update my contact information?</h3>
            <p>You can update your information by contacting us through this form or by visiting your profile page.</p>
          </div>
        </div>
      </section>
    </div>
    
  );
};

export default ContactUs;