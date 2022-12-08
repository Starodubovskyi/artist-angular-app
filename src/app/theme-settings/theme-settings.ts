export interface MenuItem {
  id: string;
  label: string;
  slug: string;
  parentId?: string | null;
  children?: MenuItem[] | []
}

export interface ThemeSettings {
  footerMenu: MenuItem[];
  mainMenu: MenuItem[];
  colors: ThemeColors;
  body: BodyColors;
  header: HeaderColors;
  footer: FooterColors;

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
  'color': string;
  'background': string;
}
export interface HeaderColors {
  'color': string;
  'background': string;
}
export interface FooterColors {
  'color': string;
  'background': string;

}
