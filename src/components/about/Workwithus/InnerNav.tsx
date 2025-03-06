import React from "react";
import Link from "next/link";

const InnerNav: React.FC = () => {
  return (
    <nav className="bg-gray-100 py-4">
      <div className="container mx-auto max-w-screen-lg flex flex-wrap justify-center space-x-6">
        <Link href="/workwithus/mission" className="text-blue-600 font-semibold hover:underline">
          Mission
        </Link>
        <Link href="/workwithus/vision" className="text-blue-600 font-semibold hover:underline">
          Vision
        </Link>
        <Link href="/workwithus/roles" className="text-blue-600 font-semibold hover:underline">
          Role Descriptions
        </Link>
        <Link href="/workwithus/gallery" className="text-blue-600 font-semibold hover:underline">
          Gallery
        </Link>
      </div>
    </nav>
  );
};

export default InnerNav;

