import React from "react";

const MazruiSpace: React.FC = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Mazrui Space</h1>
        <p className="text-lg text-gray-700 mb-4">
          The Mazrui Space is a dedicated workspace for entrepreneurs, startups, and professionals. It provides a quiet, well-equipped environment for productivity and creativity.
        </p>
        <img
          src="/images/mazrui-space.jpg"
          alt="Mazrui Space"
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default MazruiSpace;
