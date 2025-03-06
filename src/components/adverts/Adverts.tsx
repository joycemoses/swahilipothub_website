import React from "react";

interface Advert {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const adverts: Advert[] = [
  {
    title: "Join Swahilipot Hub Today!",
    description: "Empowering youth through technology and innovation.",
    imageUrl: "/images/ad1.jpg",
    link: "/joinus",
  },
  {
    title: "Upcoming Events",
    description: "Check out the latest tech meetups and workshops.",
    imageUrl: "/images/ad2.jpg",
    link: "/events",
  },
  {
    title: "Become a Sponsor",
    description: "Support innovation and youth development.",
    imageUrl: "/images/ad3.jpg",
    link: "/sponsorship",
  },
];

const Adverts: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Advertisements</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {adverts.map((advert, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={advert.imageUrl}
                alt={advert.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">{advert.title}</h3>
              <p className="text-gray-700 mb-4">{advert.description}</p>
              <a
                href={advert.link}
                className="text-blue-500 font-semibold hover:underline"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Adverts;
