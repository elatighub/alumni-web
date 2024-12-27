import React from "react";

const AlumniOverview = () => {
  const features = [
    {
      id: 1,
      title: "Alumni Directory",
      description:
        "Search and connect with alumni from various departments and graduation years.",
      icon: "📂",
    },
    {
      id: 2,
      title: "Networking & Messaging",
      description:
        "Communicate with fellow alumni through private messaging and interest-based groups.",
      icon: "💬",
    },
    {
      id: 3,
      title: "Job Opportunities",
      description:
        "Access exclusive job listings and share career opportunities with the alumni community.",
      icon: "💼",
    },
    {
      id: 4,
      title: "Events & News",
      description:
        "Stay updated on upcoming events and read the latest alumni news and achievements.",
      icon: "🗓️",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Alumni Overview
        </h2>
        <p className="text-gray-600 mb-8">
          Explore exclusive features designed to help you connect, grow, and
          thrive as a valued member of our alumni community.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlumniOverview;
