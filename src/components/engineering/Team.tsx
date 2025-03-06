import React from "react";
import TeamCard from "./TeamCard";

interface TeamMember {
  name: string;
  position: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  { name: "Michel Jerry", position: "Director of Creatives", imageUrl: "/images/michel_jerry.jpg" },
  { name: "Ziri Issa", position: "Director of Technology", imageUrl: "/images/ziri_issa.jpg" },
  { name: "Shufaa Yakut", position: "Communications Lead", imageUrl: "/images/shufaa_yakut.jpg" },
  { name: "Zuhra Sharif", position: "Head of Administration", imageUrl: "/images/zuhra_sharif.jpg" },
  { name: "Musa Chrunje", position: "Head of Community", imageUrl: "/images/musa_chrunje.jpg" },
];

const Team: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">Meet Our Team</h2>
        <p className="text-lg text-gray-700 mb-8">
          Our passionate team works together to drive Swahilipot Hub’s vision and mission forward.
        </p>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} name={member.name} role={member.position} image={member.imageUrl} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
