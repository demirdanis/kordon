import { RadioStation } from "./RadioStations.types";
import React from "react";
import { useStationStore } from "@/store/useStationStore";

export const RadioStations: React.FC<{
  data: RadioStation[];
  texts: { title: string; subtitle: string };
}> = ({ data, texts }) => {
  const { setCurrentStation } = useStationStore();

  return (
    <section id="stations" className="py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">{texts.title}</h3>
          <p className="text-base text-blue-200">{texts.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.map((station: RadioStation) => (
            <div
              key={station.id}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all cursor-pointer group"
              onClick={() => setCurrentStation(station.id)}
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <span
                  className={`w-4 h-4 ${station.color} rounded flex items-center justify-center`}
                >
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-1.808-1.808-2.773-4.207-2.773-6.742s.965-4.934 2.773-6.742M18.894 5.106c1.808 1.808 2.773 4.207 2.773 6.742s-.965-4.934-2.773-6.742"
                    />
                  </svg>
                </span>
                <h4 className="text-base font-semibold text-white">
                  {station.name}
                </h4>
              </div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <p className="text-md font-bold text-white-500">
                  {station.frequency} MHz
                </p>
              </div>
              <p className="text-xs text-gray-300 mb-2 text-center">
                {station.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
