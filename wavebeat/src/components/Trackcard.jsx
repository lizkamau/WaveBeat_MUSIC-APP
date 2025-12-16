export default function TrackCard({ track, onPlay }) {
  return (
    <div
      onClick={() => onPlay(track)}
      className="flex items-center p-2 border-b cursor-pointer hover:bg-gray-100"
    >
      <img
        src={track.album.cover_small}
        alt={track.album.title}
        className="w-12 h-12 mr-4"
      />
      <div>
        <h3 className="font-semibold">{track.title}</h3>
        <p className="text-sm text-gray-600">
          {track.artist.name} - {track.album.title}
        </p>
      </div>
    </div>
  );
}

//this section selects a song