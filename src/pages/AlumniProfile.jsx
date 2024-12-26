import React from 'react';

const AlumniProfile = ({ profile }) => {
  return (
    <section className="py-10 px-6 md:px-12 lg:px-24">
      <div className="text-center">
        <img src={profile.photo} alt={profile.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
        <h2 className="text-3xl font-semibold text-blue-700 mb-2">{profile.name}</h2>
        <p className="text-gray-700 mb-6">{profile.department} - Batch of {profile.batch}</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-500">
          Message
        </button>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Bio</h3>
        <p className="text-gray-600">{profile.bio}</p>
      </div>
    </section>
  );
};

export default AlumniProfile;