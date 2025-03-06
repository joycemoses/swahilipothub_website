import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-blue-600 text-white py-20 text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">Join Swahilipot Hub</h1>
        <p className="text-lg mb-6">
          Be part of a vibrant community empowering youth through technology, art, and innovation.
        </p>
        <a
          href="#join-form"
          className="bg-white text-blue-600 px-6 py-3 font-semibold rounded-lg shadow-md hover:bg-gray-200"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
