import React from "react";

const FeatureAction: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-gray-100 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Take Action Today</h2>
        <p className="text-lg text-gray-700 mb-6">Get involved in our programs and events.</p>
        <a href="/events" className="bg-blue-600 text-white px-6 py-3 font-semibold rounded-lg shadow-md hover:bg-blue-700">
          View Events
        </a>
      </div>
    </section>
  );
};

export default FeatureAction;
