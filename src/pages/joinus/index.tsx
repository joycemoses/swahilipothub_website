import React from 'react';
import { Link } from 'react-router-dom';

const JoinUs: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">Join Swahilipot Hub</h1>
        <p className="text-lg text-gray-700 mb-6">
          Become part of a vibrant community where creativity, technology, and entrepreneurship come together. 
          Swahilipot Hub provides a platform for young innovators, artists, and tech enthusiasts to grow, learn, and collaborate.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-500">Why Join Us?</h3>
            <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2">
              <li>Access to a collaborative workspace</li>
              <li>Networking opportunities with industry leaders</li>
              <li>Workshops and training programs</li>
              <li>Mentorship and career guidance</li>
              <li>Exclusive invitations to events and hackathons</li>
            </ul>
          </div>

          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-500">How to Join</h3>
            <ol className="list-decimal list-inside text-gray-700 mt-3 space-y-2">
              <li>Fill out the membership application form.</li>
              <li>Attend an orientation session.</li>
              <li>Engage with our community and activities.</li>
              <li>Start collaborating and innovating!</li>
            </ol>
          </div>
        </div>

        <div className="mt-8">
          <Link to="/register" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition">
            Join Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
