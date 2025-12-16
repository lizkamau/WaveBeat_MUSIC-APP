import { useEffect, useRef, useState } from "react";

export default function MusicPlayer({ track }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    if (!track) return;

    const audio = audioRef.current;
    audio.src = track.preview;
    audio.volume = volume;
    audio.play();
    setIsPlaying(true);

    // Sync state when audio ends (30s preview)
    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", handleEnded);

    return () => audio.removeEventListener("ended", handleEnded);
  }, [track]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleVolume = (e) => {
    const value = e.target.value;
    setVolume(value);
    audioRef.current.volume = value;
  };

  if (!track) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex items-center gap-4">
      <img
        src={track.album.cover_small}
        alt={track.album.title}
        className="w-12 h-12"
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

      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolume}
        className="w-24"
      />

      <audio ref={audioRef} />
    </div>
  );
}
