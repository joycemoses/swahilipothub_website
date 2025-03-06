"use client";

import React, { useState, useEffect } from 'react';

const Numbers: React.FC = () => {
  // Define state with appropriate types
  const [communityMembers, setCommunityMembers] = useState<number>(0);
  const [programs, setPrograms] = useState<number>(0);
  const [youthPercentage, setYouthPercentage] = useState<number>(0);

  useEffect(() => {
    // Start all intervals at the same time
    const interval1 = setInterval(() => {
      setCommunityMembers((prev) => (prev < 4000 ? prev + 50 : prev));
    }, 15); // Speed of community members increment (50 per 30ms)

    const interval2 = setInterval(() => {
      setPrograms((prev) => (prev < 25 ? prev + 1 : prev));
    }, 25); // Speed of programs increment (1 per 100ms)

    const interval3 = setInterval(() => {
      setYouthPercentage((prev) => (prev < 65 ? prev + 1 : prev));
    }, 25); // Speed of youth percentage increment (1 per 50ms)

    // Clear intervals when numbers reach their target
    const stopIntervals = () => {
      if (communityMembers >= 4000) clearInterval(interval1);
      if (programs >= 25) clearInterval(interval2);
      if (youthPercentage >= 65) clearInterval(interval3);
    };

    // Check if all targets are reached
    const checkCompletion = setInterval(() => {
      stopIntervals();
    }, 50);

    // Cleanup when the component unmounts or when the numbers reach their target
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(checkCompletion);
    };
  }, [communityMembers, programs, youthPercentage]);

  return (
    <div className="bg-yellow-100">
      <div className="container mx-auto py-4 md:py-12">
        <div className="w-full md:w-2/3 text-center mx-auto mb-7">
          <h3 className="text-3xl font-semibold text-gray-800">Swahilipot Hub in Numbers</h3>
          <p className="text-lg text-gray-600">Our Impacts in Numbers</p>
        </div>
        <br />
        <div className="w-full md:w-3/4 text-center mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center p-4">
              <h2 className="text-4xl text-blue-600">{communityMembers}+</h2>
              <p className="mt-2 text-gray-700">Community Members</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <h2 className="text-4xl text-blue-600">{programs}</h2>
              <p className="mt-2 text-gray-700">Programs and Activities</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <h2 className="text-4xl text-blue-600">{youthPercentage}%</h2>
              <p className="mt-2 text-gray-700">of our members are Youth</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;