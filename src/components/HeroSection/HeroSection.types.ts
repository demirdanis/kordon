import { SocialLink } from "@/services/socialLinks";

// Define HeroSlide interface here or import from another file if needed
export interface HeroSlide {
  // Add properties for HeroSlide here, for example:
  title: string;
  subtitle: string;
  image: string;
}

export interface HeroSectionProps {
  heroSlides: HeroSlide[];
  story: string;
  socialLinks: SocialLink[];
  liveVideoId: string;
}
