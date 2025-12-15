import axios from "axios";

const DEEZER_BASE = "https://api.deezer.com";

export async function searchTracks(query) {
  try {
    const response = await axios.get(`https://cors-anywhere.herokuapp.com/${DEEZER_BASE}/search`, {
      params: { q: query },
    });
    return response.data.data; // array of tracks
  } catch (error) {
    console.error("Error fetching tracks:", error);
    return [];
  }
}
