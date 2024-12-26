import React from 'react';

const JobOpportunitiesPreview = () => {
  // Sample data for job listings
  const jobs = [
    {
      id: 1,
      title: 'Customs Compliance Specialist',
      company: 'Global Trade Co.',
      location: 'Addis Ababa, Ethiopia',
      link: '#login-to-view'
    },
    {
      id: 2,
      title: 'Logistics Coordinator',
      company: 'Ethiopia Logistics Solutions',
      location: 'Dire Dawa, Ethiopia',
      link: '#login-to-view'
    },
    {
      id: 3,
      title: 'Import/Export Analyst',
      company: 'Blue Horizons Inc.',
      location: 'Bahir Dar, Ethiopia',
      link: '#login-to-view'
    }
  ];

  return (
    <div className="bg-white p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Job Opportunities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs.map((job) => (
          <div key={job.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-gray-700">{job.company}</p>
            <p className="text-gray-500">{job.location}</p>
            <a href={job.link} className="text-blue-700 hover:underline mt-4 block">
              Log in to view details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobOpportunitiesPreview;