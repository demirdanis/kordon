import { ContactProps } from "./Contact.types";
import React from "react";

export const Contact: React.FC<ContactProps> = ({
  title,
  subtitle,
  phoneLabel,
  phone,
  smsInfo,
  emailLabel,
  email,
  addressLabel,
  address,
}) => (
  <section id="contact" className="py-10 bg-black/10">
    <div className="container mx-auto px-4">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-base text-blue-200">{subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-2xl mx-auto">
        {/* Telefon */}
        <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center space-x-3">
          <div className="bg-blue-500/80 rounded-full p-2">
            <svg
              className="h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <div>
            <div className="text-sm text-white font-medium">{phoneLabel}</div>
            <a
              href={`tel:${phone.replace(/[^\d+]/g, "")}`}
              className="text-xs text-blue-200 hover:underline block"
            >
              {phone}
            </a>
            <div className="text-xs text-gray-400 mt-1">{smsInfo}</div>
          </div>
        </div>
        {/* E-posta */}
        <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center space-x-3">
          <div className="bg-blue-500/80 rounded-full p-2">
            <svg
              className="h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div>
            <div className="text-sm text-white font-medium">{emailLabel}</div>
            <a
              href={`mailto:${email}`}
              className="text-xs text-blue-200 hover:underline block"
            >
              {email}
            </a>
          </div>
        </div>
        {/* Adres */}
        <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center space-x-3">
          <div className="bg-blue-500/80 rounded-full p-2">
            <svg
              className=" h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div>
            <div className="text-sm text-white font-medium">{addressLabel}</div>
            <div className="text-xs text-blue-200">{address}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
