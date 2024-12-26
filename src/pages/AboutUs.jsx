import React from 'react';
import photoX from '../assets/images/photoX.jpg';
import photoY from '../assets/images/photoX.jpg';
import photoZ from '../assets/images/photoX.jpg';

const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
      
      {/* Mission and Vision */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Mission and Vision</h2>
        <p className="mt-2 text-gray-500">
        Our mission is to connect, support, and grow the network of former members of the Ethiopia Customs Commission.
        </p>
        <p className="text-gray-600">Through this network, we aim to foster ongoing professional relationships and encourage knowledge sharing among our alumni community.</p>
      </section>
    
      {/* History of the Alumni Association */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold">History of the Alumni Association</h2>
        <p className="mt-2 text-gray-500">
          Founded in [Year], the Alumni Association has been dedicated to connecting graduates and
          enhancing their professional and personal lives. Over the years, we have organized numerous
          events, workshops, and mentorship programs, fostering a strong sense of community and
          belonging among alumni.
        </p>
      </section>

      {/* Leadership and Board Members */}
      <section className="mb-8 ">
        <h2 className="text-2xl font-semibold">Leadership and Board Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {[
            { name: "Mr. X", role: "President", email: "x@example.com", photo: photoX },
            { name: "Mr. Y", role: "Vice President", email: "y@example.com", photo: photoY },
            { name: "Mr. Z", role: "Secretary", email: "z@example.com", photo: photoZ },
          ].map((member, index) => (
            <div key={index} className="bg-white p-4 rounded-md shadow-lg flex flex-col items-center">
              <img 
                src={member.photo} 
                alt={`${member.name}'s photo`} 
                className="w-24 h-24 rounded-full mb-4 object-cover border-2 border-gray-300"
              />
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              <a href={`mailto:${member.email}`} className="mt-2 text-blue-500 hover:underline">
                Contact
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="text-2xl font-semibold">Testimonials</h2>
        <div className="mt-4 space-y-4">
          {[
            { name: "Mr. X", testimonial: "Being part of this alumni network has truly transformed my career!" },
            { name: "Mr. Y", testimonial: "I’ve made lasting connections that have helped me professionally and personally." },
            { name: "Mr. Z", testimonial: "The support and resources provided by the alumni association are invaluable." },
          ].map((testimony, index) => (
            <blockquote key={index} className="bg-gray-100 p-4 rounded-md shadow">
              <p className="italic text-gray-700">"{testimony.testimonial}"</p>
              <footer className="mt-2 font-bold text-gray-900">— {testimony.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;