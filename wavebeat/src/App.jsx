import { useState } from "react";
import { searchTracks } from "./services/deezerService";
import SearchBar from "./components/SearchBar";
import TrackCard from "./components/TrackCard";
import MusicPlayer from "./components/MusicPlayer";

export default function App() {
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);

  const handleSearch = async (query) => {
    const results = await searchTracks(query);
    setTracks(results);
    if (results.length === 0) {
      alert("No tracks found.");
    }
  };

  return (
    <div className="w-full max-w-3xl p-4">
      <h1 className="text-3xl font-bold text-center mb-4">
        WaveBeat Music 
      </h1>
      <SearchBar onSearch={handleSearch} />
      <div className="mt-4 space-y-2">
        {tracks.map((track) => (
          <TrackCard key={track.id} track={track} onPlay={setCurrentTrack} />
        ))}
      </div>
      <MusicPlayer track={currentTrack} />
    </div>
  );
}
