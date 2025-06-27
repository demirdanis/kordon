import React, { useState } from "react";
import { AboutProps } from "./About.types";

export const About: React.FC<AboutProps> = ({ data, texts }) => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="about" className="py-8 bg-black/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">{texts.title}</h3>
          <p className="text-base text-blue-200">{texts.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
          {data.slice(0, 2).map((section, idx) => {
            const isOpen = expanded === idx;
            return (
              <div
                key={section.title}
                className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col"
                style={{ minHeight: 160, maxHeight: isOpen ? "none" : 160 }}
              >
                <h4 className="text-base font-semibold text-white mb-2">
                  {section.title}
                </h4>
                <div
                  className={`text-xs text-gray-200 mb-2 overflow-hidden transition-all duration-300 ${
                    isOpen ? "" : "line-clamp-6"
                  }`}
                  style={!isOpen ? { maxHeight: 80 } : {}}
                >
                  {section.content}
                </div>
                {!isOpen && (
                  <button
                    className="mt-auto text-blue-300 text-xs underline hover:text-blue-400 transition-colors"
                    onClick={() => setExpanded(idx)}
                  >
                    {texts.expandLabel}
                  </button>
                )}
                {isOpen && (
                  <button
                    className="mt-auto text-blue-300 text-xs underline hover:text-blue-400 transition-colors"
                    onClick={() => setExpanded(null)}
                  >
                    {texts.collapseLabel}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
