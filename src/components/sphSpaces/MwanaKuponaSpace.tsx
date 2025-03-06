import React from "react";

const MwanakuponaSpace: React.FC = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Mwanakupona Space</h1>
        <p className="text-lg text-gray-700 mb-4">
          The Mwanakupona Space is a safe and inclusive environment that fosters creativity and learning. It is frequently used for literary workshops, digital media projects, and youth engagement initiatives.
        </p>
        <img
          src="/images/mwanakupona-space.jpg"
          alt="Mwanakupona Space"
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default MwanakuponaSpace;
