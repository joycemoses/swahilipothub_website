import React from "react";

const AmphitheaterSpace: React.FC = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Amphitheater Space</h1>
        <p className="text-lg text-gray-700 mb-4">
          The Amphitheater at Swahilipot Hub is a vibrant space designed for live performances, workshops, and community gatherings. It serves as a creative hub for artists, musicians, and public speakers.
        </p>
        <img
          src="/images/amphitheater.jpg"
          alt="Amphitheater"
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default AmphitheaterSpace;
