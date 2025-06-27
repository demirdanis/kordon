import {
  RadioStationData,
  RadioStationsProps,
} from "./StationInformation.types";

import React from "react";
import { useStationStore } from "@/store/useStationStore";

// SVG Icons
const RadioIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
    <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
    <circle cx="12" cy="12" r="2" />
    <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
    <path d="M19.1 4.9C23 8.8 23 15.2 19.1 19.1" />
  </svg>
);

export const StationInformation: React.FC<RadioStationsProps> = ({
  data,
  texts,
}) => {
  const { showStationInfo, setShowStationInfo } = useStationStore();

  const StationCard: React.FC<{ station: RadioStationData }> = ({
    station,
  }) => (
    <div className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 p-0">
      <div className={`h-2 bg-gradient-to-r ${station.color}`}></div>
      <div className="p-2 space-y-5">
        {/* Şirket Ünvanı ve Logo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-blue-50  p-4 mb-2">
          <div>
            <h4 className="text-lg font-bold text-blue-900 mb-1">
              Şirket Ünvanı
            </h4>
            <div className="text-gray-800">{station.company}</div>
          </div>
          <div>
            <h4 className="text-lg font-bold text-blue-900 mb-1">
              Logo/Çağrı İşareti
            </h4>
            <div className="text-gray-800">{station.logo}</div>
          </div>
        </div>
        {/* Adres ve İletişim */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-blue-50  p-4 mb-2">
          <div>
            <h4 className="font-semibold text-blue-800 mb-1">Yazışma Adresi</h4>
            <div className="text-gray-700">{station.address}</div>
          </div>
          <div>
            <h4 className="font-semibold text-blue-800 mb-1">Telefon</h4>
            <div className="text-gray-700">{station.phone}</div>
            <h4 className="font-semibold text-blue-800 mt-2 mb-1">
              Elektronik Posta
            </h4>
            <div className="text-gray-700">{station.email}</div>
          </div>
        </div>
        {/* İnternet Adresi */}
        <div className="bg-blue-50  p-4 mb-2">
          <h4 className="font-semibold text-blue-800 mb-1">İnternet Adresi</h4>
          <div className="flex flex-wrap gap-2">
            {station.websites && station.websites.length > 0 ? (
              station.websites.map((website, i) => (
                <a
                  key={i}
                  href={
                    website.startsWith("http") ? website : `https://${website}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline hover:text-blue-900"
                >
                  {website}
                </a>
              ))
            ) : (
              <span className="text-gray-500">Yok</span>
            )}
          </div>
        </div>
        {/* Diğer Bilgiler */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-blue-50  p-4 mb-2">
          <div>
            <h4 className="font-semibold text-blue-800 mb-1">Kep Adresi</h4>
            <div className="text-gray-700">{station.kep}</div>
            <h4 className="font-semibold text-blue-800 mt-2 mb-1">
              UETS Adresi
            </h4>
            <div className="text-gray-700">{station.uets}</div>
          </div>
          <div>
            <h4 className="font-semibold text-blue-800 mb-1">Yayın Lisansı</h4>
            <div className="text-gray-700">{station.license}</div>
            <h4 className="font-semibold text-blue-800 mt-2 mb-1">
              Yayın Ortamları
            </h4>
            <div className="text-gray-700">{station.platforms}</div>
            <h4 className="font-semibold text-blue-800 mt-2 mb-1">
              Yayın Türü
            </h4>
            <div className="text-gray-700">{station.broadcastType}</div>
          </div>
        </div>
        {/* Platformlar */}
        <div className="bg-blue-50  p-4 mb-2">
          <h4 className="font-semibold text-blue-800 mb-1">
            Yayın Hizmetlerinin İletildiği Platformlar ile Kurumsal İnternet
            Sitesindeki
          </h4>
          <div className="flex flex-wrap gap-2">
            {station.websites && station.websites.length > 0 ? (
              station.websites.map((website, i) => (
                <a
                  key={i}
                  href={
                    website.startsWith("http") ? website : `https://${website}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline hover:text-blue-900"
                >
                  {website}
                </a>
              ))
            ) : (
              <span className="text-gray-500">Yok</span>
            )}
          </div>
        </div>
        <div className="bg-blue-50 p-4 mb-2">
          <h4 className="font-semibold text-blue-800 mb-1">
            Haricindeki İnternet Yayın Hizmetlerinin Sunulduğu İnternet Siteleri
          </h4>
          <div className="text-gray-500">Yok</div>
        </div>
        {/* Sorumlu Müdür ve Temsilci */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-blue-50 p-4">
          <div>
            <h4 className="font-semibold text-blue-800 mb-1">Sorumlu Müdür</h4>
            <div className="text-gray-700">{station.manager?.name}</div>
            <div className="text-gray-700 text-xs">
              İrtibat Adresi: {station.address}
            </div>
            <div className="text-gray-700 text-xs">
              e-posta: {station.manager?.email}
            </div>
            <div className="text-gray-700 text-xs">
              Telefon: {station.manager?.phone}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-blue-800 mb-1">
              Dinleyici Temsilcisi
            </h4>
            <div className="text-gray-700">
              {station.representative?.name} {station.representative?.phone}
            </div>
            <div className="text-gray-700 text-xs">
              e-posta: {station.representative?.email}
            </div>
            <div className="text-gray-700 text-xs">
              İrtibat Adresi: {station.address}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  React.useEffect(() => {
    if (showStationInfo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showStationInfo]);

  if (showStationInfo)
    return (
      <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
        <button
          onClick={() => setShowStationInfo(false)}
          className="absolute top-3 right-3 text-white bg-black/40 hover:bg-black/60 p-1.5 rounded-full"
          aria-label="Kapat"
        >
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="6" y1="6" x2="14" y2="14" />
            <line x1="14" y1="6" x2="6" y2="14" />
          </svg>
        </button>
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-full h-full bg-white overflow-auto p-0">
            <div className="min-h-screen bg-gray-50">
              {/* Content */}
              <div className="max-w-7xl mx-auto px-0 py-0">
                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {data.map((station) => (
                    <StationCard key={station.id} station={station} />
                  ))}
                </div>

                {data.length === 0 && (
                  <div className="text-center py-12">
                    <div className="mx-auto mb-4 text-gray-400">
                      <RadioIcon />
                    </div>
                    <p className="text-gray-600 text-lg">{texts.noResults}</p>
                    <p className="text-gray-500 text-sm mt-2">
                      {texts.noResultsDescription}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  else return null;
};
