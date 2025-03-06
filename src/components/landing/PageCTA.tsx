import React from "react";

const PageCTA: React.FC = () => {
  return (
    <section className="bg-blue-600 text-white text-center py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Join the Swahilipot Community Today!</h2>
        <p className="text-lg mb-6">Connect, learn, and innovate with like-minded individuals.</p>
        <a href="/joinus" className="bg-white text-blue-600 px-6 py-3 font-semibold rounded-lg shadow-md hover:bg-gray-200">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default PageCTA;
