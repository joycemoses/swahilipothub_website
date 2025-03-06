import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'Youth Empowered', value: '5,000+' },
    { label: 'Programs Conducted', value: '200+' },
    { label: 'Years of Service', value: '9' },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Impact</h2>
        <div className="flex justify-center space-x-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded-lg">
              <p className="text-4xl font-bold text-blue-500">{stat.value}</p>
              <p className="text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
