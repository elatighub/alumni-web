import React from 'react';

const FeaturedNews = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Alumni Reunion Scheduled for Next Month',
      date: '2024-10-01',
      summary: 'Join us for the annual alumni reunion and networking event.',
    },
    {
      id: 2,
      title: 'New Scholarship Fund Established',
      date: '2024-09-20',
      summary: 'We are excited to announce a new scholarship fund for current students.',
    },
    // Add more news items as needed
  ];

  return (
    <div>
      {newsItems.map(item => (
        <div key={item.id} className="bg-gray-100 p-4 rounded shadow mb-4">
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-gray-500">{item.date}</p>
          <p>{item.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturedNews;