import React, { useState, useEffect } from 'react';

const alumniData = [
  {
    id: 1,
    name: 'Elias Dejene',
    // department: 'Logistics',
    // yearsOfService: 5,
    // currentRole: 'Supply Chain Manager',
    imageUrl: 'place holder',
    email: 'johndoe@example.com',
    telephone: '+251912345678',
    academicStatus: 'Bachelor\'s Degree',
    fieldOfStudy: 'Logistics and Supply Chain Management',
    yearsInECC: 10,
    Position: 'S.Developer',
  },
  {
    id: 2,
    name: 'Chala geta',
    // department: 'Customs',
    // yearsOfService: 10,
    // currentRole: 'Customs Compliance Officer',
    imageUrl: 'place holder',
    email: 'janesmith@example.com',
    telephone: '+251912345679',
    academicStatus: 'Master\'s Degree',
    fieldOfStudy: 'International Trade and Customs',
    yearsInECC: 12,
    Position: 'Network Security'
  },
];

const AlumniDirectory = () => {
  const [search, setSearch] = useState('');
  const [positionFilter, setPositionFilter] = useState('');
  const [filteredAlumni, setFilteredAlumni] = useState(alumniData);

  useEffect(() => {
    const results = alumniData.filter((alumnus) =>
      alumnus.name.toLowerCase().includes(search.toLowerCase()) &&
      (!positionFilter || alumnus.Position === positionFilter)
    );
    setFilteredAlumni(results);
  }, [search, positionFilter]);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Alumni Directory</h2>
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 rounded-lg border border-gray-300 mb-4 md:mb-0 md:mr-4 w-full md:w-1/3"
        />
        <select
          value={positionFilter}
          onChange={(e) => setPositionFilter(e.target.value)}
          className="p-3 rounded-lg border border-gray-300 w-full md:w-1/3"
        >
          <option value="">All Position</option>
          <option value="S.Developr">S.Developer</option>
          <option value="Network Security">Network Security</option>
        </select>
      </div>
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
              Position: {alumnus.Position}
            </p>
            <p className="text-center text-gray-600 mb-1">
              Years of Service: {alumnus.yearsOfService}
            </p>
            <p className="text-center text-gray-600 mb-4">
              Current Role: {alumnus.currentRole}
            </p>

            {/* New Information */}
            <p className="text-center text-gray-600 mb-1">
              Email: <a href={`mailto:${alumnus.email}`} className="text-blue-500">{alumnus.email}</a>
            </p>
            <p className="text-center text-gray-600 mb-1">
              Telephone: {alumnus.telephone}
            </p>
            <p className="text-center text-gray-600 mb-1">
              Academic Status: {alumnus.academicStatus}
            </p>
            <p className="text-center text-gray-600 mb-1">
              Field of Study: {alumnus.fieldOfStudy}
            </p>
            <p className="text-center text-gray-600 mb-1">
              Years Served in ECC: {alumnus.yearsInECC}
            </p>

            {/* Button for profile */}
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
