// Radio Station Types & Interfaces

export interface Manager {
  name: string;
  email: string;
  phone: string;
}

export interface Representative {
  name: string;
  phone: string;
  email: string;
}

export interface RadioStationData {
  id: string;
  name: string;
  company: string;
  logo: string;
  license: string;
  broadcastType: string;
  platforms: string;
  address: string;
  websites: string[];
  phone: string;
  email: string;
  kep: string;
  uets: string;
  manager: Manager;
  representative: Representative;
  color: string;
}

export interface RadioStationsTexts {
  title: string;
  subtitle: string;
  searchPlaceholder: string;
  downloadPdf: string;
  details: string;
  noResults: string;
  noResultsDescription: string;
  generalInfo: string;
  contactInfo: string;
  authorities: string;
  responsibleManager: string;
  listenerRepresentative: string;
  viewerRepresentative: string;
  broadcastLicense: string;
  broadcastType: string;
  broadcastPlatforms: string;
  uetsAddress: string;
  kepAddress: string;
  websites: string;
}

export interface RadioStationsProps {
  data: RadioStationData[];
  texts: RadioStationsTexts;
}
