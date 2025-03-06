import React from "react";

interface Role {
  title: string;
  description: string;
}

const roles: Role[] = [
  { title: "Community Manager", description: "Engage with our community and manage events." },
  { title: "Software Developer", description: "Build and maintain digital solutions." },
  { title: "Creative Designer", description: "Design visual content and branding materials." },
];

const RoleDescription: React.FC = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Available Roles</h2>
        <div className="space-y-6">
          {roles.map((role, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{role.title}</h3>
              <p className="text-gray-700">{role.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoleDescription;
