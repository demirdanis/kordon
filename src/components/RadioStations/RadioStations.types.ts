export interface RadioStation {
  id: string;
  name: string;
  color: string;
  streamUrl?: string;
  frequency?: string;
  description?: string;
  genre?: string;
}

export interface RadioStationsTexts {
  title: string;
  subtitle: string;
}

export interface RadioStationsProps {
  data: RadioStation[];
  texts: RadioStationsTexts;
}
