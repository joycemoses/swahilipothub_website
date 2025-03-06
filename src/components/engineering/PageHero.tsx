import React from 'react';

const PageHero: React.FC = () => {
  return (
    <section className="bg-cover bg-center h-96" style={{ backgroundImage: 'url(/path-to-hero-image.jpg)' }}>
      <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to Swahilipot Hub</h1>
          <p className="text-xl">Empowering Youth Through Technology and Art</p>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
