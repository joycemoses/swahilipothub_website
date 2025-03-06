import React from "react";
import TeamCard from "./TeamCard";

const teamMembers = [
  {
    name: "Fatima Ahmed",
    role: "Community Manager",
    image: "/images/team/fatima-ahmed.jpg",
  },
  {
    name: "James Otieno",
    role: "Lead Developer",
    image: "/images/team/james-otieno.jpg",
  },
  {
    name: "Sophia Mwangi",
    role: "Creative Director",
    image: "/images/team/sophia-mwangi.jpg",
  },
];

const Team: React.FC = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">Our Team</h2>
        <p className="text-lg text-gray-700 mb-8">
          Get to know the talented individuals behind Swahilipot Hub.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
