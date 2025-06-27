import { FooterProps } from "./Footer.types";
import React from "react";
/* eslint-disable @next/next/no-img-element */
import { useStationStore } from "@/store/useStationStore";

export const Footer: React.FC<FooterProps> = ({
  brand,
  slogan,
  radiosTitle,
  radios,
  socialTitle,
  socialLinks,
  kunyelerLabel,
  copyright,
}) => {
  const { setShowStationInfo } = useStationStore();

  const handleOpen = () => {
    setShowStationInfo(true);
  };

  return (
    <footer className="bg-black/40 border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-8 items-center">
          <div className="flex flex-col items-center md:items-start md:justify-start w-full md:w-auto">
            <div className="flex items-center space-x-3 mb-4">
              <span className="bg-white bg-opacity-70 rounded-[8px] p-2">
                <img
                  src="/BannerLogo.png"
                  alt="Kordon Medya Logo"
                  className="h-8 object-contain"
                />
              </span>
              <span className="text-xl font-bold text-white">{brand}</span>
            </div>
            <p className="text-gray-400">{slogan}</p>
          </div>
          <div className="flex flex-col items-center justify-start md:px-4 w-full">
            <h5 className="text-white font-semibold mb-4">{radiosTitle}</h5>
            <ul className="space-y-3 text-gray-400 text-center w-full">
              {radios.map((radio) => (
                <li
                  key={radio.name}
                  className="flex flex-col md:flex-row md:justify-between md:items-center w-full md:gap-2"
                >
                  <span>{radio.name}</span>
                  <span className="text-xs text-gray-300 md:ml-2">
                    {radio.frequency}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center justify-start md:px-4 w-full">
            <h5 className="text-white font-semibold mb-4">{socialTitle}</h5>
            <div className="flex flex-wrap md:flex-nowrap md:flex-row justify-center gap-6 md:gap-4 w-full">
              {socialLinks?.map((link) => (
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
                  <span className="text-[10px] font-medium">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center flex flex-col items-center gap-2">
          <span
            onClick={handleOpen}
            className="ml-4 text-white bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full text-xs font-semibold transition-colors"
          >
            {kunyelerLabel}
          </span>
          <p className="text-gray-400">{copyright}</p>
        </div>
      </div>
    </footer>
  );
};
