import React from 'react';

const NewsUpdates = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">News and Updates</h1>

      {/* Blog or Article Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Blog/Articles</h2>
        <article className="bg-gray-100 p-4 rounded shadow mb-4">
          <h3 className="font-bold">Article Title</h3>
          <p className="text-gray-700">Short description of the article...</p>
          <a href="#" className="text-blue-600 hover:underline">Read more</a>
        </article>
      </section>

      {/* Alumni Spotlights */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Alumni Spotlights</h2>
        <div className="bg-gray-100 p-4 rounded shadow mb-4">
          <h3 className="font-bold">Alumni Name</h3>
          <p className="text-gray-700">Short bio or highlight...</p>
        </div>
      </section>

      {/* Announcements */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Announcements</h2>
        <ul>
          <li className="bg-gray-100 p-4 rounded shadow mb-2">
            Announcement details...
          </li>
        </ul>
      </section>

      {/* Newsletters */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Newsletters</h2>
        <div className="bg-gray-100 p-4 rounded shadow mb-4">
          <h3 className="font-bold">Latest Newsletter</h3>
          <a href="#" className="text-blue-600 hover:underline">Download PDF</a>
        </div>
      </section>
    </div>
  );
};

export default NewsUpdates;