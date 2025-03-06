import React from "react";
import Card from "./Card";

const Cards: React.FC = () => {
  const events = [
    {
      title: "Tech Conference 2025",
      date: "March 15, 2025",
      imageUrl: "/images/tech-conference.jpg",
      description: "An annual conference bringing together tech enthusiasts and professionals.",
    },
    {
      title: "Creative Arts Exhibition",
      date: "April 10, 2025",
      imageUrl: "/images/arts-exhibition.jpg",
      description: "A showcase of creative talent from Swahilipot Hub's community.",
    },
    {
      title: "Startup Pitch Event",
      date: "May 5, 2025",
      imageUrl: "/images/startup-pitch.jpg",
      description: "An event where entrepreneurs pitch their business ideas to investors.",
    },
  ];

  return (
    <div className="container mx-auto py-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event, index) => (
        <Card key={index} {...event} />
      ))}
    </div>
  );
};

export default Cards;
