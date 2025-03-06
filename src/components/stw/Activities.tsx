import React from "react";

const Activities: React.FC = () => {
  const activities = [
    {
      title: "Coding Bootcamps",
      description: "Empowering women with programming skills through hands-on coding sessions.",
    },
    {
      title: "Networking Events",
      description: "Connecting women in tech through meetups, panels, and tech summits.",
    },
    {
      title: "Mentorship Programs",
      description: "Guiding young women in their tech careers with mentorship from industry leaders.",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Activities</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{activity.title}</h3>
              <p className="text-gray-700 mt-2">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
