import { SocialLink } from "@/services/socialLinks";

/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface FooterRadio {
  name: string;
  frequency: string;
}

export interface FooterTexts {
  brand: string;
  slogan: string;
  radiosTitle: string;
  radios: FooterRadio[];
  socialTitle: string;
  kunyelerLabel: string;
  kunyelerHref: string;
  copyright: string;
}

export interface FooterProps extends FooterTexts {
  socialLinks?: SocialLink[];
}
