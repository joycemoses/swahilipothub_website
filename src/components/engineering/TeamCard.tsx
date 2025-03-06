import React from "react";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, image }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-xl text-center shadow-lg">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
      />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
};

export default TeamCard;


