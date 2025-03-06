import React from "react";

interface LogoProps {
  width?: string;
  height?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ width = "150px", height = "auto", className }) => {
  return (
    <img
      src="/images/logo.png"
      alt="Swahilipot Hub Logo"
      width={width}
      height={height}
      className={`object-contain ${className}`}
    />
  );
};

export default Logo;
