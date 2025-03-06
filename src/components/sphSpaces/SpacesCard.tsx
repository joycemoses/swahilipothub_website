import React from "react";

interface SpaceCardProps {
  name: string;
  description: string;
  imageUrl: string;
}

const SpaceCard: React.FC<SpaceCardProps> = ({ name, description, imageUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={imageUrl} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-700 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default SpaceCard;
