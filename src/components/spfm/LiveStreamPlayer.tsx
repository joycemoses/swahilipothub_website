import React from "react";

interface LivestreamPlayerProps {
  streamUrl: string;
}

const LivestreamPlayer: React.FC<LivestreamPlayerProps> = ({ streamUrl }) => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-black rounded-lg overflow-hidden shadow-lg">
      <h2 className="text-white text-xl font-bold text-center py-3 bg-gray-800">
        Live Stream
      </h2>
      <div className="relative aspect-w-16 aspect-h-9">
        <iframe
          src={streamUrl}
          title="Swahilipot FM Live Stream"
          className="w-full h-64 md:h-96"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default LivestreamPlayer;
