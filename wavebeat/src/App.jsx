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
      {/* App Header */}
      <div className="mb-8 text-center bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-2xl shadow-lg animate-fade-in">
  
        <h1 className="text-4xl font-extrabold text-center mb-4
               bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
               text-transparent bg-clip-text animate-pulse">
  WaveBeat Music
</h1>

      
      </div>

      <SearchBar onSearch={handleSearch} />

      <div className="mt-4 space-y-2">
        {tracks.length === 0 && (
          <p className="text-center opacity-70">
            Search for a song or artist to get started 🎶
          </p>
        )}

        {tracks.map((track) => (
          <TrackCard
            key={track.id}
            track={track}
            onPlay={setCurrentTrack}
          />
        ))}
      </div>

      {currentTrack && (
        <div className="mt-6">
          <MusicPlayer track={currentTrack} />
        </div>
      )}
    </div>
    
  );
}
