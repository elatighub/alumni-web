import React from 'react';

const jobs = [
  { title: 'Customs Officer', summary: 'Full-time position...', deadline: '2024-11-30' },
  { title: 'Logistics Manager', summary: 'Remote role...', deadline: '2024-12-15' },
  // More jobs
];

const JobBoard = () => {
  return (
    <section className="py-10 px-6 md:px-12 lg:px-24">
      <h2 className="text-3xl font-semibold text-blue-700 mb-6 text-center">Job Board</h2>
      <ul className="space-y-4">
        {jobs.map((job, index) => (
          <li key={index} className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold">{job.title}</h3>
            <p className="text-gray-600">{job.summary}</p>
            <p className="text-gray-500">Apply by: {job.deadline}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default JobBoard;