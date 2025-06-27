/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface ContactTexts {
  title: string;
  subtitle: string;
  phoneLabel: string;
  phone: string;
  smsInfo: string;
  emailLabel: string;
  email: string;
  addressLabel: string;
  address: string;
}

export interface ContactProps extends ContactTexts {}
