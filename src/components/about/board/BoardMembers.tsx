import React from "react";
import TeamCard from "./TeamCard";

const boardMembers = [
  {
    name: "John Doe",
    role: "Chairperson",
    image: "/images/board/john-doe.jpg",
  },
  {
    name: "Jane Smith",
    role: "Vice Chairperson",
    image: "/images/board/jane-smith.jpg",
  },
  {
    name: "Ali Mohamed",
    role: "Treasurer",
    image: "/images/board/ali-mohamed.jpg",
  },
];

const BoardMembers: React.FC = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">Board Members</h2>
        <p className="text-lg text-gray-700 mb-8">
          Meet the esteemed board members who guide and support Swahilipot Hub.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {boardMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardMembers;
