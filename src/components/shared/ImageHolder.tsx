import React from "react";

interface ImageHolderProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageHolder: React.FC<ImageHolderProps> = ({ src, alt, className }) => {
  return (
    <div className={`overflow-hidden rounded-lg ${className}`}>
      <img src={src} alt={alt} className="w-full h-auto object-cover" />
    </div>
  );
};

export default ImageHolder;
