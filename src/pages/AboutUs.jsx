import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700">
          Our mission is to foster a strong and supportive network among alumni, 
          promoting lifelong connections and providing opportunities for professional growth.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p className="text-gray-700">
          Our vision is to be a leading alumni association that empowers members 
          through collaboration, networking, and community engagement.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">History of the Alumni Association</h2>
        <p className="text-gray-700">
          Established in [Year], our alumni association has been dedicated to 
          connecting graduates from the Customs and Revenue Authority. We strive 
          to create a vibrant community that celebrates achievements and provides 
          resources for ongoing success.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Leadership and Board Members</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>
            <strong>Mr. Elias Dejene</strong> - President
          </li>
          <li>
            <strong>Elias Dejene</strong> - Vice President
          </li>
          <li>
            <strong>Elias Dejene</strong> - Secretary
          </li>
          <li>
            <strong>Emily White</strong> - Treasurer
          </li>
          {/* Add more board members as needed */}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
        <div className="bg-gray-100 p-4 rounded shadow mb-4">
          <p className="italic">"The alumni association has been instrumental in helping me network and find job opportunities!"</p>
          <p className="font-semibold">— Elias Dejene</p>
        </div>
        <div className="bg-gray-100 p-4 rounded shadow mb-4">
          <p className="italic">"I have made lifelong friends and connections through the alumni events." </p>
          <p className="font-semibold">— Elias Dejene</p>
        </div>
        {/* Add more testimonials as needed */}
      </section>
    </div>
  );
};

export default AboutUs