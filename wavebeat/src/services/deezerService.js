const BASE_URL = "https://corsproxy.io/?https://api.deezer.com";

export async function searchTracks(query) {
  const res = await fetch(`${BASE_URL}/search?q=${encodeURIComponent(query)}`);
  const data = await res.json();

  console.log("DEEZEER RESPONSE:", data);

  return data.data || [];
}
