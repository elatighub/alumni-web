import React, { useState, useEffect } from 'react';

// Sample data for alumni (in a real app, this data would come from an API)
const alumniData = [
  {
    id: 1,
    name: 'John Doe',
    department: 'Logistics',
    yearsOfService: 5,
    currentRole: 'Supply Chain Manager',
    imageUrl: '/path-to-image/john.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    department: 'Customs',
    yearsOfService: 10,
    currentRole: 'Customs Compliance Officer',
    imageUrl: '/path-to-image/jane.jpg',
  },
  // Add more alumni as needed
];

const AlumniDirectory = () => {
  const [search, setSearch] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('');
  const [filteredAlumni, setFilteredAlumni] = useState(alumniData);

  // Filtering based on search and department
  useEffect(() => {
    const results = alumniData.filter((alumnus) =>
      alumnus.name.toLowerCase().includes(search.toLowerCase()) &&
      (!departmentFilter || alumnus.department === departmentFilter)
    );
    setFilteredAlumni(results);
  }, [search, departmentFilter]);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Alumni Directory</h2>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 rounded-lg border border-gray-300 mb-4 md:mb-0 md:mr-4 w-full md:w-1/3"
        />
        <select
          value={departmentFilter}
          onChange={(e) => setDepartmentFilter(e.target.value)}
          className="p-3 rounded-lg border border-gray-300 w-full md:w-1/3"
        >
          <option value="">All Departments</option>
          <option value="Logistics">Logistics</option>
          <option value="Customs">Customs</option>
          {/* Add more department options as needed */}
        </select>
      </div>

      {/* Profile Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAlumni.map((alumnus) => (
          <div key={alumnus.id} className="bg-white p-6 rounded-lg shadow-md">
            <img
              src={alumnus.imageUrl}
              alt={alumnus.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-center text-blue-800 mb-2">
              {alumnus.name}
            </h3>
            <p className="text-center text-gray-600 mb-1">
              Department: {alumnus.department}
            </p>
            <p className="text-center text-gray-600 mb-1">
              Years of Service: {alumnus.yearsOfService}
            </p>
            <p className="text-center text-gray-600 mb-4">
              Current Role: {alumnus.currentRole}
            </p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg block mx-auto hover:bg-blue-700">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlumniDirectory;