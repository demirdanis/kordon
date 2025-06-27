/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface HeaderTexts {
  title: string;
  navLinks: { label: string; href: string }[];
  kunyelerLabel: string;
}

export interface HeaderProps extends HeaderTexts {}
