export interface MenuItem {
  id: string;
  label: string;
  slug: string;
  parentId?: string | null;
  children?: MenuItem[] | [];
  visible?: boolean;
}

export interface ThemeSettings {
  footerMenu: MenuItem[];
  mainMenu: MenuItem[];
  colors: ThemeColors;
  body: BodyColors;
  header: HeaderThemeSettings;
  footer: FooterThemeSettings;
  siteName: string;
  siteLogo:string;
}

export interface Color {
  name: string;
  hex: string;
  isDarkContrast: boolean;
}

export interface ThemeColors {
  'primary-color': string;
  'secondary-color': string;
  'accent-color': string;
}

export interface BodyColors {
  color: string;
  background: string;
}

export interface HeaderThemeSettings {
  color: string;
  background: string;

  fixed: boolean;

  variant: string;
}

export interface FooterThemeSettings {
  color: string;
  background: string;

  variant?: string;
}

