import { LivePlayerProps } from "./LivePlayer.types";
import { RadioStation } from "../RadioStations/RadioStations.types";
import React from "react";
import { SimpleRadioPlayer } from "./SimpleRadioPlayer";
import { useStationStore } from "@/store/useStationStore";

export const LivePlayer: React.FC<
  Omit<LivePlayerProps, "station" | "currentStation">
> = ({ data }) => {
  const {
    currentStation,
    setCurrentStation,
    showPlayerPanel,
    setShowPlayerPanel,
    volume,
    setVolume,
    isPlaying,
    setIsPlaying,
    playerError,
    playerErrorLog,
    setPlayerError,
  } = useStationStore();

  const station = React.useMemo(
    () => data.find((s) => s.id === currentStation),
    [data, currentStation]
  );
  console.log("playerErrorLog", playerErrorLog);
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  if (!showPlayerPanel) return null;
  return (
    <div
      className="fixed bottom-0 left-0 right-0 backdrop-blur-md border-t border-white/10 p-1 z-40"
      style={{ background: "#000000cc" }}
    >
      <button
        onClick={() => {
          setShowPlayerPanel(false);
          setPlayerError(false);
        }}
        className="absolute top-0 right-0 -translate-y-1/2 lg:top-2 lg:right-2 lg:translate-y-0 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors z-50"
        aria-label="Kapat"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="relative w-full">
        <div className="flex flex-wrap gap-2 mb-4 pb-2 sm:flex-nowrap bg-black/70 rounded-xl p-2 pt-4">
          {data.map((station: RadioStation) => (
            <button
              key={station.id}
              onClick={() => {
                setCurrentStation(station.id);
              }}
              className={`w-[48%] gap-1 sm:w-auto flex-shrink-0 px-2 py-2 sm:px-4 sm:py-2 rounded-full text-sm font-medium transition-all flex items-center gap-0 ${station.color} text-white shadow-lg relative hover:brightness-125 hover:scale-105 hover:ring-2 hover:ring-white/60 focus:outline-none focus:ring-2 focus:ring-white/80`}
              style={{ minWidth: 0 }}
            >
              <svg
                className={`w-4 h-4 text-white ${
                  currentStation === station.id ? "animate-fade-pulse" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-1.808-1.808-2.773-4.207-2.773-6.742s.965-4.934 2.773-6.742M18.894 5.106c1.808 1.808 2.773 4.207 2.773 6.742s-.965 4.934-2.773 6.742"
                />
              </svg>
              {station.name}
            </button>
          ))}
        </div>
        <div className="w-full h-px bg-white/20 my-3" />
        {playerError ? (
          <div className="flex flex-col items-center justify-center min-h-[64px] max-h-48 overflow-y-auto">
            <span className="text-white text-lg font-bold animate-fade-pulse">
              Radyo aktif değil
            </span>
            {playerErrorLog.length > 0 && (
              <pre className="text-xs text-red-200 bg-black/60 rounded p-2 mt-2 w-full max-w-xl overflow-x-auto whitespace-pre-wrap">
                {playerErrorLog.join("\n")}
              </pre>
            )}
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div
                className={`w-12 h-12 ${station?.color} rounded-lg flex items-center justify-center`}
              >
                <svg
                  className={`w-6 h-6 text-white ${
                    isPlaying ? "animate-fade-pulse" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-1.808-1.808-2.773-4.207-2.773-6.742s.965-4.934 2.773-6.742M18.894 5.106c1.808 1.808 2.773 4.207 2.773 6.742s-.965-4.934-2.773 6.742"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-semibold">{station?.name}</h4>
                <div className="flex items-center space-x-4">
                  <p className="text-gray-300 text-sm">
                    {station?.frequency} FM
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-12 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                aria-label="Ses Seviyesi"
              />
              <button
                onClick={handlePlayPause}
                className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              >
                {isPlaying ? (
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <rect x="5" y="4" width="3" height="12" rx="1" />
                    <rect x="12" y="4" width="3" height="12" rx="1" />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <polygon points="6,4 17,10 6,16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        )}
        <SimpleRadioPlayer key={station?.name} />
      </div>
    </div>
  );
};
