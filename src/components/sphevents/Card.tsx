import React from "react";

interface CardProps {
  title: string;
  date: string;
  imageUrl: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, date, imageUrl, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-500 text-sm">{date}</p>
        <p className="text-gray-700 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;
