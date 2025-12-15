// for global player state : store/playerStore.js
import { create } from "zustand";

export const usePlayerStore = create((set) => ({
  currentTrack: null,
  setTrack: (track) => set({ currentTrack: track }),
}));
