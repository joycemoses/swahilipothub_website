import React from "react";
import Slider from "react-slick";
import { sliderSettings } from "./SlidderSettings";
import Card from "./Card";

const EventsCards: React.FC = () => {
  const eventList = [
    {
      title: "Tech Conference 2025",
      date: "March 15, 2025",
      imageUrl: "/images/tech-conference.jpg",
      description: "Join the latest discussions in the tech world.",
    },
    {
      title: "Creative Arts Exhibition",
      date: "April 10, 2025",
      imageUrl: "/images/arts-exhibition.jpg",
      description: "Experience creative expression in various forms.",
    },
    {
      title: "Startup Pitch Event",
      date: "May 5, 2025",
      imageUrl: "/images/startup-pitch.jpg",
      description: "Innovative startups showcase their ideas to investors.",
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Upcoming Events</h2>
      <Slider {...sliderSettings}>
        {eventList.map((event, index) => (
          <div key={index} className="px-3">
            <Card {...event} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default EventsCards;
