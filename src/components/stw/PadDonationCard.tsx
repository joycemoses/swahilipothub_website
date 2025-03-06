import React from "react";

interface PadDonationCardProps {
  title: string;
  description: string;
  amount: string;
}

const PadDonationCard: React.FC<PadDonationCardProps> = ({ title, description, amount }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-700 mt-2">{description}</p>
      <p className="text-blue-600 font-bold mt-4">Ksh {amount}</p>
    </div>
  );
};

export default PadDonationCard;
