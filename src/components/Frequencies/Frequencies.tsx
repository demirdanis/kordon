import React from "react";
import {
  FrequenciesProps,
  CityFrequencies,
  Frequency,
} from "./Frequencies.types";

export const Frequencies: React.FC<
  FrequenciesProps & { texts: { title: string; subtitle: string } }
> = ({ data, texts }) => (
  <section id="frequencies" className="py-8 bg-black/10">
    <div className="container mx-auto px-4">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-semibold text-white mb-2">
          {texts.title}
        </h3>
        <p className="text-base text-blue-200">{texts.subtitle}</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 max-w-6xl mx-auto">
        {data.map((city: CityFrequencies) => (
          <div
            key={city.name}
            className="bg-white/5 border border-white/10 rounded-lg p-4 sm:p-6"
          >
            <h4 className="text-lg font-bold text-white mb-2 text-center">
              {city.name}
            </h4>
            <ul className="space-y-0.5 sm:space-y-1">
              {city.frequencies.map((freq: Frequency, i: number) => (
                <li
                  key={i}
                  className="text-blue-200 text-sm flex justify-between items-center"
                >
                  <span>{freq.station}</span>
                  <span className="font-semibold text-white">{freq.value}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);
