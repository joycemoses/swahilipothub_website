import React from 'react';

const Events: React.FC = () => {
  const upcomingEvents = [
    { title: 'Tech Meetup', date: 'March 15, 2025', description: 'A networking event for tech enthusiasts.' },
    { title: 'Creative Arts Showcase', date: 'April 5, 2025', description: 'Celebrating artistic talent in the community.' },
    { title: 'Entrepreneurship Bootcamp', date: 'April 20, 2025', description: 'A workshop on business development and innovation.' },
  ];

  return (
    <section className="bg-white py-12 px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">Upcoming Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-blue-500">{event.title}</h2>
              <p className="text-gray-600">{event.date}</p>
              <p className="text-gray-700 mt-2">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
