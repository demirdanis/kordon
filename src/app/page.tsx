"use client";

import "react-h5-audio-player/lib/styles.css";

import {
  stationsInformation,
  stationsInformationTexts,
} from "@/services/stationInformation";

import { About } from "@/components/About/About";
import { Contact } from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";
import { Frequencies } from "@/components/Frequencies/Frequencies";
import { Header } from "@/components/Header/Header";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { LivePlayer } from "@/components/LivePlayer/LivePlayer";
import { RadioStations } from "@/components/RadioStations/RadioStations";
import React from "react";
import { StationInformation } from "@/components/StationInformation/StationInformation";
import { aboutSections } from "@/services/aboutSections";
import { aboutTexts } from "@/services/aboutTexts";
import { contactTexts } from "@/services/contactTexts";
import { footerTexts } from "@/services/footerTexts";
import { frequenciesData } from "@/services/frequenciesData";
import { frequenciesTexts } from "@/services/frequenciesTexts";
import { headerTexts } from "@/services/headerTexts";
import { heroSectionTexts } from "@/services/heroSectionTexts";
import { heroSlides } from "@/services/heroSlides";
import { radioStations } from "@/services/radioStations";
import { radioStationsTexts } from "@/services/radioStationsTexts";
import { socialLinks } from "@/services/socialLinks";
import { story } from "@/services/story";

export default function KordonMediaSite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header
        title={headerTexts.title}
        navLinks={headerTexts.navLinks}
        kunyelerLabel={headerTexts.kunyelerLabel}
      />
      <HeroSection
        heroSlides={heroSlides}
        story={story}
        socialLinks={socialLinks}
        liveVideoId={heroSectionTexts.liveVideoId}
      />
      <LivePlayer data={radioStations} />
      <RadioStations data={radioStations} texts={radioStationsTexts} />
      <Frequencies data={frequenciesData} texts={frequenciesTexts} />
      <About data={aboutSections} texts={aboutTexts} />
      <Contact {...contactTexts} />
      <Footer {...footerTexts} socialLinks={socialLinks} />
      <StationInformation
        data={stationsInformation}
        texts={stationsInformationTexts}
      />
    </div>
  );
}
