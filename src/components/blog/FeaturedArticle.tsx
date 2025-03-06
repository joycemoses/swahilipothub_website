import React from "react";

interface FeaturedArticleProps {
  title: string;
  summary: string;
  image: string;
  link: string;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ title, summary, image, link }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <img src={image} alt={title} className="w-full h-56 object-cover rounded-md mb-4" />
      <h2 className="text-2xl font-bold text-blue-600 mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{summary}</p>
      <a href={link} className="text-blue-600 font-semibold hover:underline">
        Read More →
      </a>
    </div>
  );
};

export default FeaturedArticle;
