import React from "react";

const SwahilipotPillars: React.FC = () => {
  return (
    <section className="py-12 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Pillars</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Technology</h3>
            <p className="text-gray-600">Empowering youth through tech and innovation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Creativity</h3>
            <p className="text-gray-600">Supporting artistic expression and digital media.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Entrepreneurship</h3>
            <p className="text-gray-600">Building a sustainable future through business skills.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwahilipotPillars;
