import React from 'react';

const Amphitheater: React.FC = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">Swahilipot Amphitheater</h1>
        <p className="text-lg text-gray-700 mb-4">
          The Amphitheater at Swahilipot Hub is an open-air space designed for performances, talks, and community gatherings. It serves as a vibrant platform for creative expression, cultural events, and knowledge-sharing sessions.
        </p>
        <p className="text-lg text-gray-700">
          Equipped with seating arrangements and a performance stage, it is ideal for music shows, panel discussions, and interactive events.
        </p>
      </div>
    </section>
  );
};

export default Amphitheater;
