import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-cover bg-center py-24 text-white text-center" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold mb-4">Welcome to Swahilipot Hub</h1>
        <p className="text-lg mb-6">Empowering youth through technology, innovation, and creativity.</p>
        <a href="/about" className="bg-blue-600 px-6 py-3 font-semibold rounded-lg shadow-md hover:bg-blue-700">
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;
