import { useEffect, useRef, useState } from "react";

export default function MusicPlayer({ track }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (track) {
      audioRef.current.src = track.preview;
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [track]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  if (!track) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex items-center">
      <img
        src={track.album.cover_small}
        alt={track.album.title}
        className="w-12 h-12 mr-4"
      />
      <div className="flex-1">
        <h3 className="font-semibold">{track.title}</h3>
        <p className="text-sm text-gray-600">{track.artist.name}</p>
      </div>
      <button
        onClick={togglePlay}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
      <audio ref={audioRef} />
    </div>
  );
}
