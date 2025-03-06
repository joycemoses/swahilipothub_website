import React from "react";

interface ArticleProps {
  title: string;
  author: string;
  date: string;
  content: string;
  image: string;
}

const Article: React.FC<ArticleProps> = ({ title, author, date, content, image }) => {
  return (
    <article className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <img src={image} alt={title} className="w-full h-64 object-cover rounded-md mb-4" />
      <h1 className="text-3xl font-bold text-blue-600 mb-2">{title}</h1>
      <p className="text-gray-500 text-sm mb-4">
        By {author} • {date}
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">{content}</p>
    </article>
  );
};

export default Article;
