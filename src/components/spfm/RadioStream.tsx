import React, { useState } from "react";

interface RadioStreamProps {
  audioUrl: string;
}

const RadioStream: React.FC<RadioStreamProps> = ({ audioUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-3">Swahilipot FM Radio</h2>
      <audio ref={audioRef} src={audioUrl} />
      <button
        onClick={togglePlay}
        className="px-4 py-2 rounded-full bg-blue-600 text-white font-semibold mt-3"
      >
        {isPlaying ? "Pause" : "Play"} Live Radio
      </button>
    </div>
  );
};

export default RadioStream;
