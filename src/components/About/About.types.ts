export interface AboutSection {
  title: string;
  content: string;
}

export interface AboutTexts {
  title: string;
  subtitle: string;
  expandLabel: string;
  collapseLabel: string;
}

export interface AboutProps {
  data: AboutSection[];
  texts: AboutTexts;
}
