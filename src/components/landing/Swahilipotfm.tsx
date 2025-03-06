import React from "react";

const SwahilipotFM: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Swahilipot FM</h2>
        <p className="text-lg text-gray-700">Your home for creative audio content and discussions.</p>
        <audio controls className="mt-4">
          <source src="/audio/sample.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </section>
  );
};

export default SwahilipotFM;
