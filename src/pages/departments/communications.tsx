import React from 'react';

const Communication: React.FC = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold mb-6 text-blue-600">Communication Department</h1>
        <p className="text-lg text-gray-700 mb-4">
          The Communication Department at Swahilipot Hub is responsible for managing internal and external communications, ensuring our message aligns with our mission to empower youth. 
        </p>
        <p className="text-lg text-gray-700 mb-4">
          We oversee public relations, media outreach, and branding, ensuring that Swahilipot Hub maintains a positive image within the community.
        </p>
        <p className="text-lg text-gray-700">
          Our team works actively to share members' stories, promote events, and engage with the public through digital platforms, print media, and community outreach.
        </p>
      </div>
    </section>
  );
};

export default Communication;

