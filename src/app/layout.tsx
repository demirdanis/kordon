"use client";

import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          type="text/javascript"
          src="https://hosted.muses.org/mrp.js"
          onLoad={() => {
            console.log("Script loaded");

            // MRP'nin hazır olmasını bekle
          }}
          onError={() => {
            console.error("Failed to load MRP.js");
          }}
        ></Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
