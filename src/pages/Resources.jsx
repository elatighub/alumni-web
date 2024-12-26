import React from 'react';

// Sample resource data
const resourcesData = [
  {
    id: 1,
    title: 'Career Services',
    description: 'Access a range of career services including resume reviews, interview preparation, and job search assistance.',
    link: '#', // Replace with actual link to career services
  },
  {
    id: 2,
    title: 'Networking Opportunities',
    description: 'Join our networking events and workshops to connect with fellow alumni and industry professionals.',
    link: '#', // Replace with actual link to networking events
  },
  {
    id: 3,
    title: 'Mentorship Programs',
    description: 'Participate in our mentorship programs to connect with experienced professionals in your field.',
    link: '#', // Replace with actual link to mentorship programs
  },
  {
    id: 4,
    title: 'Scholarships and Grants',
    description: 'Explore available scholarships and grants for further education and professional development.',
    link: '#', // Replace with actual link to scholarships and grants
  },
];
const truncateText = (text, maxLength) => {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};
const Resources = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Resources</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resourcesData.map(resource => (
          <div key={resource.id} className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="font-bold text-xl mb-2">{resource.title}</h2>
            <p className="text-gray-700 mb-4">{truncateText(resource.description,100)}</p>
            <a href={resource.link} className="text-blue-500 hover:underline">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;