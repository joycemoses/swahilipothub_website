import React from "react";

const Testimonials: React.FC = () => {
  const testimonials = [
    { name: "John Doe", feedback: "Swahilipot Hub changed my career through mentorship." },
    { name: "Jane Smith", feedback: "A great place for networking and skill-building." },
  ];

  return (
    <section className="py-12 px-6 bg-gray-100 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">What People Say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic">"{t.feedback}"</p>
              <h3 className="mt-4 text-lg font-semibold">{t.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
