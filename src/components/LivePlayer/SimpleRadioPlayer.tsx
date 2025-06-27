/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";

import { radioStations } from "@/services/radioStations";
import { useStationStore } from "@/store/useStationStore";

declare global {
  interface Window {
    Capacitor?: any;
  }
}

export const SimpleRadioPlayer: React.FC = () => {
  const {
    currentStation,
    volume,
    isPlaying,
    setIsPlaying,
    setPlayerError,
    setPlayerErrorLog,
  } = useStationStore();
  const station = radioStations.find((s) => s.id === currentStation);
  const src = station?.streamUrl || "";
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) return;
    setTimeout(() => {
      if (audioRef.current) {
        setIsPlaying(true);
      }
    });
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play().catch(() => {});
        }
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume;
  }, [volume]);

  const handlePlay = () => {
    setTimeout(() => {
      setPlayerError(false);
    });
  };

  const handleError = (e: any) => {
    setTimeout(() => {
      setPlayerError(true);
    });

    const log: string[] = [];
    log.push("=== AUDIO ERROR DEBUG ===");
    log.push("Error: " + e);
    log.push("Error code: " + e.target?.error?.code);
    log.push("Error message: " + e.target?.error?.message);
    log.push("Network state: " + e.target?.networkState);
    log.push("Ready state: " + e.target?.readyState);
    log.push("Current src: " + e.target?.src);
    switch (e.target?.error?.code) {
      case 1:
        log.push("MEDIA_ERR_ABORTED: Playback aborted");
        break;
      case 2:
        log.push("MEDIA_ERR_NETWORK: Network error");
        break;
      case 3:
        log.push("MEDIA_ERR_DECODE: Decode error");
        break;
      case 4:
        log.push("MEDIA_ERR_SRC_NOT_SUPPORTED: Source not supported");
        break;
    }

    setPlayerErrorLog(log);
  };

  return (
    <audio
      ref={audioRef}
      src={src}
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        zIndex: 99999,
        // display: "none",
      }}
      onPlay={handlePlay}
      onError={handleError}
      preload="auto"
      controls={true}
      muted={false}
      playsInline
      autoPlay
    />
  );
};
