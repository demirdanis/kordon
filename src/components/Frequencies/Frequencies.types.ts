export interface Frequency {
  station: string;
  value: string;
}

export interface CityFrequencies {
  name: string;
  frequencies: Frequency[];
}

export interface FrequenciesTexts {
  title: string;
  subtitle: string;
}

export interface FrequenciesProps {
  data: CityFrequencies[];
  texts: FrequenciesTexts;
}
