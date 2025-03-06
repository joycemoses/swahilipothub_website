import React from "react";

const PageContent: React.FC = () => {
  return (
    <section className="py-12 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Why Join Swahilipot Hub?</h2>
        <p className="text-lg text-gray-700 mb-4">
          Swahilipot Hub offers an inclusive space for creatives, technologists, and entrepreneurs to grow, collaborate, and innovate.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Networking</h3>
            <p className="text-gray-600">Meet like-minded individuals and professionals.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Workshops & Events</h3>
            <p className="text-gray-600">Gain knowledge from industry leaders.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Resources & Mentorship</h3>
            <p className="text-gray-600">Access tools, funding opportunities, and expert guidance.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageContent;
