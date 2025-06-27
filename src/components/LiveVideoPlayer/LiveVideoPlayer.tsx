import React from "react";

interface LiveVideoPlayerProps {
  open: boolean;
  onClose: () => void;
  videoId: string;
}

export const LiveVideoPlayer: React.FC<LiveVideoPlayerProps> = ({
  open,
  onClose,
  videoId,
}) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors z-50"
        aria-label="Kapat"
      >
        <svg
          className="w-6 h-6"
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
      <div className="w-full max-w-2xl aspect-video bg-black rounded-xl overflow-hidden shadow-lg flex items-center justify-center">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&showinfo=0`}
          title="YouTube video player"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </div>
  );
};
