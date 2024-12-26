import React from 'react';

// Dummy data for alumni
const alumniData = [
  {
    id: 1,
    name: "Robel Tesfahe",
    description: "Senior Customs Officer, known for her leadership in modernizing processes.",
    image: "/path-to-image1.jpg", // replace with actual path to image
  },
  {
    id: 2,
    name: "Chala Geta",
    description: "A pioneer in digital customs solutions, helping ECC embrace new technology.",
    image: "/path-to-image2.jpg",
  },
  {
    id: 3,
    name: "Elias Dejene",
    description: "Led major initiatives in ECC’s international trade relationships.",
    image: "/path-to-image3.jpg",
  },
];

const FeaturedAlumni = () => {
  return (
    <div className="bg-gray-100 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Alumni</h2>
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {alumniData.map(alumnus => (
          <div key={alumnus.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img src={alumnus.image} alt={alumnus.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">{alumnus.name}</h3>
            <p className="text-gray-600">{alumnus.description}</p>
            <a href="#details" className="text-blue-700 hover:underline mt-4 inline-block">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedAlumni;