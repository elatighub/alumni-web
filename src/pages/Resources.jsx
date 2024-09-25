import React from 'react';

const Resources = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Resources</h1>

      {/* Career Services Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Career Services</h2>
        <p>
          Explore our career services that offer guidance on job searching, resume building, and interview preparation.
        </p>
      </section>

      {/* Network Opportunities Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Network Opportunities</h2>
        <p>
          Connect with fellow alumni and industry professionals through networking events and workshops.
        </p>
      </section>

      {/* Mentorship Programs Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Mentorship Programs</h2>
        <p>
          Join our mentorship programs to gain insights and advice from experienced professionals in your field.
        </p>
      </section>

      {/* Scholarships and Grants Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Scholarships and Grants</h2>
        <p>
          Learn about available scholarships and grants to support your educational and professional development.
        </p>
      </section>
    </div>
  );
};

export default Resources;