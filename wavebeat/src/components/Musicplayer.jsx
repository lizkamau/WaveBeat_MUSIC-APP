import { useEffect, useRef, useState } from "react";

export default function MusicPlayer({ track }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7); // default 70%

  useEffect(() => {
    if (track && audioRef.current) {
      audioRef.current.src = track.preview;
      audioRef.current.volume = volume;
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [track]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  if (!track) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 border-t border-gray-700">
      <audio ref={audioRef} />

      <div className="flex items-center justify-between max-w-3xl mx-auto gap-4">
        {/* Track info */}
        <div className="flex items-center gap-3">
          <img
            src={track.album.cover_small}
            alt={track.title}
            className="w-12 h-12 rounded"
          />
          <div>
            <p className="font-semibold">{track.title}</p>
            <p className="text-sm text-gray-400">{track.artist.name}</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={togglePlay}
            className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-700"
          >
            {isPlaying ? "Pause" : "Play"}
          </button>

          {/* Volume */}
          <div className="flex items-center gap-2">
            <span className="text-sm">🔊</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
