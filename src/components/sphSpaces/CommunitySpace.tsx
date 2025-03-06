import React from "react";

const CommunitySpace: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Community Space</h1>
        <p className="text-lg text-gray-700 mb-4">
          The Community Space is a flexible environment for networking, collaboration, and interactive learning experiences. It is ideal for social meetups, innovation hubs, and educational programs.
        </p>
        <img
          src="/images/community-space.jpg"
          alt="Community Space"
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default CommunitySpace;
