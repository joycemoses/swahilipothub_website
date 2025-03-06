import React from "react";

const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
];

const Gallery: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">Our Workplace</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Gallery ${index + 1}`} className="rounded-lg shadow-md" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
