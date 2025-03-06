import React from "react";

const MekatililiSpace: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Mekatilili Space</h1>
        <p className="text-lg text-gray-700 mb-4">
          Named after the legendary freedom fighter Mekatilili wa Menza, this space is designed for empowerment and knowledge-sharing. It is used for mentorship programs and community discussions.
        </p>
        <img
          src="/images/mekatilili-space.jpg"
          alt="Mekatilili Space"
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default MekatililiSpace;
