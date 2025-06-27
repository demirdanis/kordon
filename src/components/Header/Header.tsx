import { HeaderProps } from "./Header.types";
import React from "react";
/* eslint-disable @next/next/no-img-element */
import { useStationStore } from "@/store/useStationStore";

export const Header: React.FC<HeaderProps> = ({
  title,
  navLinks,
  kunyelerLabel,
}) => {
  const { setShowStationInfo } = useStationStore();

  const handleOpen = () => {
    setShowStationInfo(true);
  };

  return (
    <header className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 mb-0">
            <span
              className="p-2 rounded-[8px]"
              style={{ backgroundColor: "#ffffff" }}
            >
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/BannerLogo.png`}
                alt="Kordon Medya Logo"
                className="h-10 object-contain"
              />
            </span>
            <span className="text-xl font-bold text-white">{title}</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-blue-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <span
            onClick={handleOpen}
            className="ml-4 text-white bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full text-xs font-semibold transition-colors"
          >
            {kunyelerLabel}
          </span>
        </div>
      </div>
    </header>
  );
};
