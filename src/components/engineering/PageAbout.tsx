import React from 'react';

const PageAbout: React.FC = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">About Swahilipot Hub</h1>
        <p className="text-lg text-gray-700 mb-4">
          Swahilipot Hub Foundation is a non-profit organization based in Mombasa, Kenya, dedicated to meaningfully engaging and empowering youth aged 18 to 35 to unleash their full potential.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Our mission is to enable the community to develop themselves, fostering an environment where creativity, technology, and entrepreneurship thrive.
        </p>
        <p className="text-lg text-gray-700">
          We envision inspiring communities to thrive by providing a platform for innovation, collaboration, and personal growth.
        </p>
      </div>
    </section>
  );
};

export default PageAbout;
