import React from 'react';

const GetInvolved = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Get Involved</h2>

      {/* Volunteer Opportunities */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Volunteer Opportunities</h3>
        <p className="text-gray-500 mb-2">
          Join us in making a difference! We have various volunteer roles available for alumni looking to give back to the community. Whether you want to help organize events or support mentoring programs, your contributions are invaluable.
        </p>
        <ul className="list-disc pl-5">
          <li className="mb-2">Event Coordinator: Help plan and execute alumni events.</li>
          <li className="mb-2">Mentor: Provide guidance and support to recent graduates.</li>
          <li>Committee Member: Join a committee to help shape the future of the network.</li>
        </ul>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
          Learn More
        </button>
      </section>

      {/* Fundraising Campaigns */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Fundraising Campaigns</h3>
        <p className="text-gray-500 mb-2">
          Your support helps us create meaningful programs and initiatives. Participate in our fundraising campaigns to help sustain our alumni network.
        </p>
        <ul className="list-disc pl-5">
          <li className="mb-2">Annual Fundraising Gala: Join us for a night of fun and philanthropy.</li>
          <li className="mb-2">Crowdfunding Campaigns: Contribute to specific projects and initiatives.</li>
          <li>Corporate Sponsorship: Partner with us to support our goals.</li>
        </ul>
        <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700">
          Donate Now
        </button>
      </section>

      {/* Membership Information */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Membership Information</h3>
        <p className="text-gray-500 mb-2">
          Become a member of the alumni network and enjoy exclusive benefits, including networking opportunities, access to resources, and participation in events.
        </p>
        <ul className="list-disc pl-5">
          <li className="mb-2">Access to the Alumni Directory.</li>
          <li className="mb-2">Invitations to exclusive events and webinars.</li>
          <li>Newsletters with updates on alumni and network activities.</li>
        </ul>
        <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded shadow hover:bg-purple-700">
          Join Now
        </button>
      </section>
    </div>
  );
};

export default GetInvolved;