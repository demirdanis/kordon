import React, { useEffect, useState } from "react";

import { HeroSectionProps } from "./HeroSection.types";
import { LiveVideoPlayer } from "@/components/LiveVideoPlayer/LiveVideoPlayer";
import { radioStations } from "@/services/radioStations";
import { useStationStore } from "@/store/useStationStore";

export const HeroSection: React.FC<HeroSectionProps> = ({
  heroSlides,
  story,
  socialLinks,
  liveVideoId,
}) => {
  const [showVideo, setShowVideo] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { setCurrentStation, setShowPlayerPanel } = useStationStore();

  // Otomatik slider değişimi (5sn)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev: number) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const handleLiveListen = () => {
    setCurrentStation(radioStations[0].id);
    setShowPlayerPanel(true);
  };

  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH}/kordon.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <LiveVideoPlayer
        open={showVideo}
        onClose={() => setShowVideo(false)}
        videoId={liveVideoId}
      />
      <div
        className="absolute inset-0"
        style={{ background: "rgba(10, 24, 61, 0.5)" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
      {/* Desktop Layout */}
      <div className="hidden xl:block">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid xl:grid-cols-2 gap-12 items-center">
            {/* Left Side - Hero Slider */}
            <div className="relative">
              <div
                className={`${heroSlides[currentSlide].image} rounded-2xl p-8 min-h-[400px] h-[400px] flex flex-col justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent"></div>
                <div className="relative z-10">
                  <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
                    {heroSlides[currentSlide].title}
                  </h2>
                  <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                    {heroSlides[currentSlide].subtitle}
                  </p>
                  <div className="flex flex-wrap gap-4 items-center max-w-[720px] mx-auto">
                    <div className="flex flex-row gap-4 w-full max-w-[720px]">
                      <button
                        onClick={handleLiveListen}
                        className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 transition-all transform hover:scale-105 max-w-[360px] w-full"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <polygon points="6,4 17,10 6,16" />
                        </svg>

                        <span>Canlı Dinle</span>
                      </button>
                      <button
                        onClick={() => setShowVideo(true)}
                        className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 transition-all transform hover:scale-105 max-w-[360px] w-full"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <polygon points="6,4 17,10 6,16" />
                        </svg>
                        <span>Canlı İzle</span>
                      </button>
                    </div>
                    {/* Social Media Buttons - Desktop inline */}
                    <div className="hidden xl:flex gap-2 ml-2">
                      {socialLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex flex-col items-center`}
                        >
                          <span
                            className={`flex items-center justify-center w-12 h-12 rounded-full transition-all shadow mb-1 ${link.bgClass}`}
                          >
                            {link.icon}
                          </span>
                          <span className="text-[10px] font-medium">
                            {link.name}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Slider Controls */}
              {/* Slide Indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {heroSlides.map((_, index: number) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide ? "bg-white" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
            {/* Right Side - Story */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              {/* story prop'u ile alınacak */}
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Küçük Bir Öykü Bu...
              </h3>
              <div className="text-gray-200 leading-relaxed space-y-4">
                {story.split("\n\n").map((paragraph: string, index: number) => (
                  <p key={index} className="text-sm leading-loose">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-6 text-center">
                <span className="inline-block bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  İmbat FM - 1992
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile/Tablet Layout */}
      <div className="xl:hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-5xl font-bold text-white mb-6 leading-tight text-center">
              Damardan Kalbe{" "}
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Tam 90
              </span>{" "}
              İmbat FM
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed text-center">
              Türkiyenin En Büyük Bölgesel Radyo İstasyonu
            </p>
            <div className="flex flex-row gap-2 items-center w-full justify-center mb-4 max-w-[720px] mx-auto">
              <button
                onClick={handleLiveListen}
                className="w-full max-w-[360px] bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 transition-all transform hover:scale-105 text-sm sm:text-lg"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <polygon points="6,4 17,10 6,16" />
                </svg>

                <span>Canlı Dinle</span>
              </button>
              <button
                onClick={() => setShowVideo(true)}
                className="w-full max-w-[360px] bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 transition-all transform hover:scale-105 text-sm sm:text-lg"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <polygon points="6,4 17,10 6,16" />
                </svg>
                <span>Canlı İzle</span>
              </button>
            </div>
            {/* Sosyal Medya Iconları - Mobil */}
            <div className="flex justify-center gap-2 flex-wrap w-full mb-2">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center"
                >
                  <span
                    className={`flex items-center justify-center w-12 h-12 rounded-full transition-all shadow mb-1 ${link.bgClass}`}
                  >
                    {link.icon}
                  </span>
                  <span className="text-[9px] font-medium">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
