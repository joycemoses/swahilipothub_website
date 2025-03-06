import React from 'react';

const Roles: React.FC = () => {
  const roles = [
    { title: 'Technology', description: 'Empowering youth through programs like Data and Research, Digital Literacy, and Pitching Thursday.' },
    { title: 'Creatives', description: 'Nurturing talents in acting, voice arts, and diverse artistic expressions through initiatives like Sanaa Show and Sanaart Shop.' },
    { title: 'Communications', description: 'Managing internal and external communications, public relations, and media outreach.' },
    { title: 'Community Experience', description: 'Enhancing member engagement and organizing events that foster a sense of community.' },
    { title: 'Engineering', description: 'Developing sustainable solutions and supporting technological innovations.' },
  ];

  return (
    <section className="py-12 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Our Departments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {roles.map((role, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-2xl font-bold mb-2">{role.title}</h3>
              <p className="text-gray-700">{role.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roles;
