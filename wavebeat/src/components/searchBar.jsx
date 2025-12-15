import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md mx-auto my-4">
      <input
        type="text"
        placeholder="Search for songs, artists, albums..."
        className="flex-1 p-2 border rounded-l-md outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 rounded-r-md">
        Search
      </button>
    </form>
  );
}
