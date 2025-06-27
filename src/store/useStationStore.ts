import { create } from "zustand";

interface StationState {
  currentStation: string;
  setCurrentStation: (id: string) => void;
  showPlayerPanel: boolean;
  setShowPlayerPanel: (show: boolean) => void;
  volume: number;
  setVolume: (v: number) => void;
  isPlaying: boolean;
  setIsPlaying: (v: boolean) => void;
  showStationInfo: boolean;
  setShowStationInfo: (v: boolean) => void;
  playerError: boolean;
  setPlayerError: (v: boolean) => void;
  playerErrorLog: string[];
  setPlayerErrorLog: (log: string[]) => void;
}

export const useStationStore = create<StationState>((set) => ({
  currentStation: "imbat-fm",
  setCurrentStation: (id) => set({ currentStation: id, showPlayerPanel: true }),
  showPlayerPanel: false,
  setShowPlayerPanel: (show) => set({ showPlayerPanel: show }),
  showStationInfo: false,
  setShowStationInfo: (show) => set({ showStationInfo: show }),
  volume: 1,
  setVolume: (v) => set({ volume: v }),
  isPlaying: false,
  setIsPlaying: (v) => set({ isPlaying: v }),
  playerError: false,
  setPlayerError: (v) => set({ playerError: v }),
  playerErrorLog: [],
  setPlayerErrorLog: (log) => set({ playerErrorLog: log }),
}));
